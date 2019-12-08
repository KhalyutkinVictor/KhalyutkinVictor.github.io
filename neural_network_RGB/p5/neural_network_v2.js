// Khalyutkin Victor
const neurons_count = 7, neurons_layers_count = 3;

class Neuron {
    constructor(is_bias = false, layer, inpt = 0.0, outpt = 0.0) {
        this.bias = is_bias;
        this.layer = layer;
        this.input = inpt;
        this.output = outpt;
    }
}

let neurons = new Array(neurons_count);
neurons[0] = new Neuron(false, 1);
neurons[1] = new Neuron(false, 1);
neurons[2] = new Neuron(false, 1);
neurons[3] = new Neuron(false, 2);
neurons[4] = new Neuron(false, 2);
neurons[5] = new Neuron(false, 2);
neurons[6] = new Neuron(false, 3);

class Layer {
    constructor(curr_layer, neurons_count) {
        let t = 0;
        this.neurons = [];
        for (let i = 0; i < neurons_count; i++) {
            if (neurons[i].layer == curr_layer) {
                this.neurons[t++] = neurons[i];
            }
        }
        this.neurons.length = t;
    }
}

let layers = new Array(4);
layers[1] = new Layer(1, neurons_count);
layers[2] = new Layer(2, neurons_count);
layers[3] = new Layer(3, neurons_count);

