
let neurons_count = 8;
let w = new Array(neurons_count);
let grad = new Array(neurons_count);
let prevgrad = new Array(neurons_count);
let neurons = new Array(neurons_count);

const E = 7;
const A = 3;

for (let i = 0; i < neurons_count; i++) {
    prevgrad[i] = [0, 0, 0, 0, 0, 0, 0, 0];
}

class Neuron {
    constructor(layer, bias = false, inp = 0.0, out = 0.0) {
        this.input = inp;
        this.output = out;
        this.layer = layer;
        this.bias = bias;
    }
}

function sigmoid(x) {
    return 1.0 / (1.0 + Math.exp(-x));
}

function synaps() {
    for (let i = 0; i < neurons_count; i++) {
        if (neurons[i].layer == 1) {
            neurons[i].output = neurons[i].input;
        }
    }
    for (let i = 0; i < neurons_count; i++) {
        for (let j = i + 1; j < neurons_count; j++) {
            if (w[i][j] != -1) {
                neurons[j].input += neurons[i].output * w[i][j];
                neurons[j].output = sigmoid(neurons[j].input);
            }
        }
    }
    //console.log(neurons);
}

function nn_output() {
    return (neurons[7].output < 0.5);
}

function nn_error() {
    our_ans = neurons[7].output;
    sum += (ideal_ans - our_ans) * (ideal_ans - our_ans);
    return sum / test_count;
}

function reverse_sigmoid(out) {
    return (1.0 - out) * out;
}

function nn_study() {
    if (nn_output() == false) { console.log('TRUE'); }
    //console.log('IDEAL', ideal_ans, 'OUR_ANS', nn_output());
    for (let i = 0; i < neurons_count; i++) {
        grad[i] = new Array(neurons_count);
    }
    delta = [0, 0, 0, 0, 0, 0, 0, 0];
    out = neurons[7].output;
    delta[7] = (ideal_ans - out);// * reverse_sigmoid(neurons[7].output);
    //console.log(ideal_ans, out, reverse_sigmoid(out));
    for (let i = neurons_count - 1; i >= 0; i--) {
        for (let j = neurons_count - 1; j >= 0; j--) {
            if (i == j) { continue; }
            if (neurons[i].layer - neurons[j].layer == -1 && !neurons[i].bias && w[i][j] >= 0) {
                for (let x = 0; x < neurons_count; x++) {
                    if (w[x][i] >= 0) {
                        delta[i] += w[x][i] * delta[j];
                    }
                }
                grad[i][j] = delta[j] * neurons[i].output;
                w[i][j] += E * grad[i][j] + A * prevgrad[i][j];
                //console.log('w changed', i, j, w[i][j]);
            }
        }
    }
    //console.log('Deltas ', delta);
    for (let i = 0; i < neurons_count; i++) {
        for (let j = 0; j < neurons_count; j++) {
            prevgrad[i][j] = grad[i][j];
        }
    }
    //console.log(w);
}

function ini() {
    neurons[0] = new Neuron(1, true, 1.0, 1.0);
    neurons[1] = new Neuron(1);
    neurons[2] = new Neuron(1);
    neurons[3] = new Neuron(1);
    neurons[4] = new Neuron(2, true, 1.0, 1.0);
    neurons[5] = new Neuron(2);
    neurons[6] = new Neuron(2);
    neurons[7] = new Neuron(3);

    for (let i = 0; i < 8; i++) {
        w[i] = new Array(neurons_count);
    }
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (i == j) {
                w[i][j] = -1;
            }
            if (neurons[j].layer - neurons[i].layer == 1 && !neurons[j].bias) {
                if (neurons[i].bias && neurons[j].bias) { continue; }
                w[i][j] = Math.random();
            } else {
                w[i][j] = -1;
            }
        }
    }
}

console.log(w);


//
