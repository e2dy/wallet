'use strict';
var nodes = function() {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.infuraNode = require('./nodeHelpers/infura');
nodes.metamaskNode = require('./nodeHelpers/metamask');
nodes.nodeTypes = {
    GEN: "Genom",
    Custom: "CUSTOM"
};
nodes.ensNodeTypes = [nodes.nodeTypes.GEN, nodes.nodeTypes.Ropsten];
nodes.customNodeObj = {
    'name': 'CUS',
    'blockExplorerTX': '',
    'blockExplorerAddr': '',
    'type': nodes.nodeTypes.Custom,
    'eip155': false,
    'chainId': '',
    'tokenList': [],
    'abiList': [],
    'service': 'Custom',
    'lib': null
};
nodes.nodeList = {
    'eth_mew': {
        'name': 'GEN',
        'blockExplorerTX': 'https://explorer.genom.tech/tx/[[txHash]]',
        'blockExplorerAddr': 'https://explorer.genom.tech/addr/[[address]]',
        'type': nodes.nodeTypes.GEN,
        'eip155': true,
        'chainId': 200666,
        'tokenList': [],
        'abiList': [],
        'service': 'Genom Wallet',
        'lib': new nodes.customNode('http://genom.tech', '443')
    }
};


nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;
