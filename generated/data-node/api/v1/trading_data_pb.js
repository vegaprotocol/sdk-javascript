// source: data-node/api/v1/trading_data.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var vega_vega_pb = require('../../../vega/vega_pb.js');
goog.object.extend(proto, vega_vega_pb);
var vega_markets_pb = require('../../../vega/markets_pb.js');
goog.object.extend(proto, vega_markets_pb);
var vega_governance_pb = require('../../../vega/governance_pb.js');
goog.object.extend(proto, vega_governance_pb);
var vega_assets_pb = require('../../../vega/assets_pb.js');
goog.object.extend(proto, vega_assets_pb);
var vega_events_v1_events_pb = require('../../../vega/events/v1/events_pb.js');
goog.object.extend(proto, vega_events_v1_events_pb);
var vega_oracles_v1_spec_pb = require('../../../vega/oracles/v1/spec_pb.js');
goog.object.extend(proto, vega_oracles_v1_spec_pb);
var vega_oracles_v1_data_pb = require('../../../vega/oracles/v1/data_pb.js');
goog.object.extend(proto, vega_oracles_v1_data_pb);
var vega_commands_v1_commands_pb = require('../../../vega/commands/v1/commands_pb.js');
goog.object.extend(proto, vega_commands_v1_commands_pb);
var vega_commands_v1_transaction_pb = require('../../../vega/commands/v1/transaction_pb.js');
goog.object.extend(proto, vega_commands_v1_transaction_pb);
var vega_commands_v1_validator_commands_pb = require('../../../vega/commands/v1/validator_commands_pb.js');
goog.object.extend(proto, vega_commands_v1_validator_commands_pb);
var github_com_mwitkow_go$proto$validators_validator_pb = require('../../../github.com/mwitkow/go-proto-validators/validator_pb.js');
goog.object.extend(proto, github_com_mwitkow_go$proto$validators_validator_pb);
goog.exportSymbol('proto.datanode.api.v1.AccountsSubscribeRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.AccountsSubscribeResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.AssetByIDRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.AssetByIDResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.AssetsRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.AssetsResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.CandlesRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.CandlesResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.CandlesSubscribeRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.CandlesSubscribeResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.Checkpoint', null, global);
goog.exportSymbol('proto.datanode.api.v1.CheckpointsRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.CheckpointsResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.DelegationsRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.DelegationsResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.DepositRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.DepositResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.DepositsRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.DepositsResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.ERC20WithdrawalApprovalRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.ERC20WithdrawalApprovalResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.EstimateFeeRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.EstimateFeeResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.EstimateMarginRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.EstimateMarginResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.FeeInfrastructureAccountsRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.FeeInfrastructureAccountsResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetEpochRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetEpochResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetKeyRotationsByNodeRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetKeyRotationsByNodeResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetKeyRotationsRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetKeyRotationsResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetNetworkParametersProposalsRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetNetworkParametersProposalsResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetNewAssetProposalsRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetNewAssetProposalsResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetNewMarketProposalsRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetNewMarketProposalsResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetNodeByIDRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetNodeByIDResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetNodeDataRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetNodeDataResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetNodeSignaturesAggregateRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetNodeSignaturesAggregateResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetNodesRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetNodesResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetProposalByIDRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetProposalByIDResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetProposalByReferenceRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetProposalByReferenceResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetProposalsByPartyRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetProposalsByPartyResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetProposalsRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetProposalsResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetRewardDetailsRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetRewardDetailsResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetUpdateMarketProposalsRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetUpdateMarketProposalsResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetVegaTimeRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetVegaTimeResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetVotesByPartyRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.GetVotesByPartyResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.GlobalRewardPoolAccountsRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.GlobalRewardPoolAccountsResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.KeyRotation', null, global);
goog.exportSymbol('proto.datanode.api.v1.LastTradeRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.LastTradeResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.LiquidityProvisionsRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.LiquidityProvisionsResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.MarginLevelsRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.MarginLevelsResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.MarginLevelsSubscribeRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.MarginLevelsSubscribeResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.MarketAccountsRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.MarketAccountsResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.MarketByIDRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.MarketByIDResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.MarketDataByIDRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.MarketDataByIDResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.MarketDepthRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.MarketDepthResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.MarketDepthSubscribeRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.MarketDepthSubscribeResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.MarketDepthUpdatesSubscribeRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.MarketDepthUpdatesSubscribeResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.MarketsDataRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.MarketsDataResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.MarketsDataSubscribeRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.MarketsDataSubscribeResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.MarketsRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.MarketsResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.NetworkParametersRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.NetworkParametersResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.ObserveDelegationsRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.ObserveDelegationsResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.ObserveEventBusRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.ObserveEventBusResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.ObserveGovernanceRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.ObserveGovernanceResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.ObservePartyProposalsRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.ObservePartyProposalsResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.ObservePartyVotesRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.ObservePartyVotesResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.ObserveProposalVotesRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.ObserveProposalVotesResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.ObserveRewardDetailsRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.ObserveRewardDetailsResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.OptionalProposalState', null, global);
goog.exportSymbol('proto.datanode.api.v1.OracleDataBySpecRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.OracleDataBySpecResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.OracleSpecRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.OracleSpecResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.OracleSpecsRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.OracleSpecsResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.OrderByIDRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.OrderByIDResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.OrderByMarketAndIDRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.OrderByMarketAndIDResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.OrderByReferenceRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.OrderByReferenceResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.OrderVersionsByIDRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.OrderVersionsByIDResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.OrdersByMarketRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.OrdersByMarketResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.OrdersByPartyRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.OrdersByPartyResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.OrdersSubscribeRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.OrdersSubscribeResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.Pagination', null, global);
goog.exportSymbol('proto.datanode.api.v1.PartiesRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.PartiesResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.PartyAccountsRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.PartyAccountsResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.PartyByIDRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.PartyByIDResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.PartyStakeRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.PartyStakeResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.PositionsByPartyRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.PositionsByPartyResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.PositionsSubscribeRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.PositionsSubscribeResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.TradesByMarketRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.TradesByMarketResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.TradesByOrderRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.TradesByOrderResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.TradesByPartyRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.TradesByPartyResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.TradesSubscribeRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.TradesSubscribeResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.TransferResponsesSubscribeRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.TransferResponsesSubscribeResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.WithdrawalRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.WithdrawalResponse', null, global);
goog.exportSymbol('proto.datanode.api.v1.WithdrawalsRequest', null, global);
goog.exportSymbol('proto.datanode.api.v1.WithdrawalsResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.DelegationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.DelegationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.DelegationsRequest.displayName = 'proto.datanode.api.v1.DelegationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.DelegationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.DelegationsResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.DelegationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.DelegationsResponse.displayName = 'proto.datanode.api.v1.DelegationsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.ObserveDelegationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.ObserveDelegationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.ObserveDelegationsRequest.displayName = 'proto.datanode.api.v1.ObserveDelegationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.ObserveDelegationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.ObserveDelegationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.ObserveDelegationsResponse.displayName = 'proto.datanode.api.v1.ObserveDelegationsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.PartyStakeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.PartyStakeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.PartyStakeRequest.displayName = 'proto.datanode.api.v1.PartyStakeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.PartyStakeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.PartyStakeResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.PartyStakeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.PartyStakeResponse.displayName = 'proto.datanode.api.v1.PartyStakeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetNodeDataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.GetNodeDataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetNodeDataRequest.displayName = 'proto.datanode.api.v1.GetNodeDataRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetNodeDataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.GetNodeDataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetNodeDataResponse.displayName = 'proto.datanode.api.v1.GetNodeDataResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetNodesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.GetNodesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetNodesRequest.displayName = 'proto.datanode.api.v1.GetNodesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetNodesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.GetNodesResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.GetNodesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetNodesResponse.displayName = 'proto.datanode.api.v1.GetNodesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetNodeByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.GetNodeByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetNodeByIDRequest.displayName = 'proto.datanode.api.v1.GetNodeByIDRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetNodeByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.GetNodeByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetNodeByIDResponse.displayName = 'proto.datanode.api.v1.GetNodeByIDResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetEpochRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.GetEpochRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetEpochRequest.displayName = 'proto.datanode.api.v1.GetEpochRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetEpochResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.GetEpochResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetEpochResponse.displayName = 'proto.datanode.api.v1.GetEpochResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.KeyRotation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.KeyRotation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.KeyRotation.displayName = 'proto.datanode.api.v1.KeyRotation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetKeyRotationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.GetKeyRotationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetKeyRotationsRequest.displayName = 'proto.datanode.api.v1.GetKeyRotationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetKeyRotationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.GetKeyRotationsResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.GetKeyRotationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetKeyRotationsResponse.displayName = 'proto.datanode.api.v1.GetKeyRotationsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetKeyRotationsByNodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.GetKeyRotationsByNodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetKeyRotationsByNodeRequest.displayName = 'proto.datanode.api.v1.GetKeyRotationsByNodeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetKeyRotationsByNodeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.GetKeyRotationsByNodeResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.GetKeyRotationsByNodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetKeyRotationsByNodeResponse.displayName = 'proto.datanode.api.v1.GetKeyRotationsByNodeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.AssetsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.AssetsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.AssetsRequest.displayName = 'proto.datanode.api.v1.AssetsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.AssetsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.AssetsResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.AssetsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.AssetsResponse.displayName = 'proto.datanode.api.v1.AssetsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.AssetByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.AssetByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.AssetByIDRequest.displayName = 'proto.datanode.api.v1.AssetByIDRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.AssetByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.AssetByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.AssetByIDResponse.displayName = 'proto.datanode.api.v1.AssetByIDResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetNodeSignaturesAggregateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.GetNodeSignaturesAggregateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetNodeSignaturesAggregateRequest.displayName = 'proto.datanode.api.v1.GetNodeSignaturesAggregateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetNodeSignaturesAggregateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.GetNodeSignaturesAggregateResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.GetNodeSignaturesAggregateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetNodeSignaturesAggregateResponse.displayName = 'proto.datanode.api.v1.GetNodeSignaturesAggregateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.OptionalProposalState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.OptionalProposalState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.OptionalProposalState.displayName = 'proto.datanode.api.v1.OptionalProposalState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetProposalsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.GetProposalsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetProposalsRequest.displayName = 'proto.datanode.api.v1.GetProposalsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetProposalsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.GetProposalsResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.GetProposalsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetProposalsResponse.displayName = 'proto.datanode.api.v1.GetProposalsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetProposalsByPartyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.GetProposalsByPartyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetProposalsByPartyRequest.displayName = 'proto.datanode.api.v1.GetProposalsByPartyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetProposalsByPartyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.GetProposalsByPartyResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.GetProposalsByPartyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetProposalsByPartyResponse.displayName = 'proto.datanode.api.v1.GetProposalsByPartyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetVotesByPartyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.GetVotesByPartyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetVotesByPartyRequest.displayName = 'proto.datanode.api.v1.GetVotesByPartyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetVotesByPartyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.GetVotesByPartyResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.GetVotesByPartyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetVotesByPartyResponse.displayName = 'proto.datanode.api.v1.GetVotesByPartyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetNewMarketProposalsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.GetNewMarketProposalsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetNewMarketProposalsRequest.displayName = 'proto.datanode.api.v1.GetNewMarketProposalsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetNewMarketProposalsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.GetNewMarketProposalsResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.GetNewMarketProposalsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetNewMarketProposalsResponse.displayName = 'proto.datanode.api.v1.GetNewMarketProposalsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetUpdateMarketProposalsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.GetUpdateMarketProposalsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetUpdateMarketProposalsRequest.displayName = 'proto.datanode.api.v1.GetUpdateMarketProposalsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetUpdateMarketProposalsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.GetUpdateMarketProposalsResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.GetUpdateMarketProposalsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetUpdateMarketProposalsResponse.displayName = 'proto.datanode.api.v1.GetUpdateMarketProposalsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetNetworkParametersProposalsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.GetNetworkParametersProposalsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetNetworkParametersProposalsRequest.displayName = 'proto.datanode.api.v1.GetNetworkParametersProposalsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetNetworkParametersProposalsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.GetNetworkParametersProposalsResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.GetNetworkParametersProposalsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetNetworkParametersProposalsResponse.displayName = 'proto.datanode.api.v1.GetNetworkParametersProposalsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetNewAssetProposalsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.GetNewAssetProposalsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetNewAssetProposalsRequest.displayName = 'proto.datanode.api.v1.GetNewAssetProposalsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetNewAssetProposalsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.GetNewAssetProposalsResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.GetNewAssetProposalsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetNewAssetProposalsResponse.displayName = 'proto.datanode.api.v1.GetNewAssetProposalsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetProposalByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.GetProposalByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetProposalByIDRequest.displayName = 'proto.datanode.api.v1.GetProposalByIDRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetProposalByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.GetProposalByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetProposalByIDResponse.displayName = 'proto.datanode.api.v1.GetProposalByIDResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetProposalByReferenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.GetProposalByReferenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetProposalByReferenceRequest.displayName = 'proto.datanode.api.v1.GetProposalByReferenceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetProposalByReferenceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.GetProposalByReferenceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetProposalByReferenceResponse.displayName = 'proto.datanode.api.v1.GetProposalByReferenceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.ObserveGovernanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.ObserveGovernanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.ObserveGovernanceRequest.displayName = 'proto.datanode.api.v1.ObserveGovernanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.ObserveGovernanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.ObserveGovernanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.ObserveGovernanceResponse.displayName = 'proto.datanode.api.v1.ObserveGovernanceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.ObservePartyProposalsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.ObservePartyProposalsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.ObservePartyProposalsRequest.displayName = 'proto.datanode.api.v1.ObservePartyProposalsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.ObservePartyProposalsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.ObservePartyProposalsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.ObservePartyProposalsResponse.displayName = 'proto.datanode.api.v1.ObservePartyProposalsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.ObserveProposalVotesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.ObserveProposalVotesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.ObserveProposalVotesRequest.displayName = 'proto.datanode.api.v1.ObserveProposalVotesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.ObserveProposalVotesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.ObserveProposalVotesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.ObserveProposalVotesResponse.displayName = 'proto.datanode.api.v1.ObserveProposalVotesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.ObservePartyVotesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.ObservePartyVotesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.ObservePartyVotesRequest.displayName = 'proto.datanode.api.v1.ObservePartyVotesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.ObservePartyVotesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.ObservePartyVotesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.ObservePartyVotesResponse.displayName = 'proto.datanode.api.v1.ObservePartyVotesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.MarginLevelsSubscribeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.MarginLevelsSubscribeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.MarginLevelsSubscribeRequest.displayName = 'proto.datanode.api.v1.MarginLevelsSubscribeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.MarginLevelsSubscribeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.MarginLevelsSubscribeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.MarginLevelsSubscribeResponse.displayName = 'proto.datanode.api.v1.MarginLevelsSubscribeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.MarginLevelsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.MarginLevelsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.MarginLevelsRequest.displayName = 'proto.datanode.api.v1.MarginLevelsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.MarginLevelsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.MarginLevelsResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.MarginLevelsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.MarginLevelsResponse.displayName = 'proto.datanode.api.v1.MarginLevelsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.MarketsDataSubscribeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.MarketsDataSubscribeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.MarketsDataSubscribeRequest.displayName = 'proto.datanode.api.v1.MarketsDataSubscribeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.MarketsDataSubscribeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.MarketsDataSubscribeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.MarketsDataSubscribeResponse.displayName = 'proto.datanode.api.v1.MarketsDataSubscribeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.MarketDataByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.MarketDataByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.MarketDataByIDRequest.displayName = 'proto.datanode.api.v1.MarketDataByIDRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.MarketDataByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.MarketDataByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.MarketDataByIDResponse.displayName = 'proto.datanode.api.v1.MarketDataByIDResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.MarketsDataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.MarketsDataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.MarketsDataRequest.displayName = 'proto.datanode.api.v1.MarketsDataRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.MarketsDataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.MarketsDataResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.MarketsDataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.MarketsDataResponse.displayName = 'proto.datanode.api.v1.MarketsDataResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.LastTradeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.LastTradeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.LastTradeRequest.displayName = 'proto.datanode.api.v1.LastTradeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.LastTradeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.LastTradeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.LastTradeResponse.displayName = 'proto.datanode.api.v1.LastTradeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.MarketByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.MarketByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.MarketByIDRequest.displayName = 'proto.datanode.api.v1.MarketByIDRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.MarketByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.MarketByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.MarketByIDResponse.displayName = 'proto.datanode.api.v1.MarketByIDResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.PartyByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.PartyByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.PartyByIDRequest.displayName = 'proto.datanode.api.v1.PartyByIDRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.PartyByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.PartyByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.PartyByIDResponse.displayName = 'proto.datanode.api.v1.PartyByIDResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.PartiesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.PartiesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.PartiesRequest.displayName = 'proto.datanode.api.v1.PartiesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.PartiesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.PartiesResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.PartiesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.PartiesResponse.displayName = 'proto.datanode.api.v1.PartiesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.TradesByPartyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.TradesByPartyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.TradesByPartyRequest.displayName = 'proto.datanode.api.v1.TradesByPartyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.TradesByPartyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.TradesByPartyResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.TradesByPartyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.TradesByPartyResponse.displayName = 'proto.datanode.api.v1.TradesByPartyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.TradesByOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.TradesByOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.TradesByOrderRequest.displayName = 'proto.datanode.api.v1.TradesByOrderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.TradesByOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.TradesByOrderResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.TradesByOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.TradesByOrderResponse.displayName = 'proto.datanode.api.v1.TradesByOrderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.AccountsSubscribeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.AccountsSubscribeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.AccountsSubscribeRequest.displayName = 'proto.datanode.api.v1.AccountsSubscribeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.AccountsSubscribeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.AccountsSubscribeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.AccountsSubscribeResponse.displayName = 'proto.datanode.api.v1.AccountsSubscribeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.OrdersSubscribeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.OrdersSubscribeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.OrdersSubscribeRequest.displayName = 'proto.datanode.api.v1.OrdersSubscribeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.TradesSubscribeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.TradesSubscribeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.TradesSubscribeRequest.displayName = 'proto.datanode.api.v1.TradesSubscribeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.CandlesSubscribeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.CandlesSubscribeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.CandlesSubscribeRequest.displayName = 'proto.datanode.api.v1.CandlesSubscribeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.CandlesSubscribeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.CandlesSubscribeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.CandlesSubscribeResponse.displayName = 'proto.datanode.api.v1.CandlesSubscribeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.MarketDepthSubscribeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.MarketDepthSubscribeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.MarketDepthSubscribeRequest.displayName = 'proto.datanode.api.v1.MarketDepthSubscribeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.MarketDepthSubscribeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.MarketDepthSubscribeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.MarketDepthSubscribeResponse.displayName = 'proto.datanode.api.v1.MarketDepthSubscribeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.MarketDepthUpdatesSubscribeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.MarketDepthUpdatesSubscribeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.MarketDepthUpdatesSubscribeRequest.displayName = 'proto.datanode.api.v1.MarketDepthUpdatesSubscribeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.MarketDepthUpdatesSubscribeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.MarketDepthUpdatesSubscribeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.MarketDepthUpdatesSubscribeResponse.displayName = 'proto.datanode.api.v1.MarketDepthUpdatesSubscribeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.PositionsSubscribeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.PositionsSubscribeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.PositionsSubscribeRequest.displayName = 'proto.datanode.api.v1.PositionsSubscribeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.PositionsSubscribeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.PositionsSubscribeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.PositionsSubscribeResponse.displayName = 'proto.datanode.api.v1.PositionsSubscribeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.OrdersByMarketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.OrdersByMarketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.OrdersByMarketRequest.displayName = 'proto.datanode.api.v1.OrdersByMarketRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.OrdersByMarketResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.OrdersByMarketResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.OrdersByMarketResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.OrdersByMarketResponse.displayName = 'proto.datanode.api.v1.OrdersByMarketResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.OrdersByPartyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.OrdersByPartyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.OrdersByPartyRequest.displayName = 'proto.datanode.api.v1.OrdersByPartyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.OrdersByPartyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.OrdersByPartyResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.OrdersByPartyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.OrdersByPartyResponse.displayName = 'proto.datanode.api.v1.OrdersByPartyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.OrderByMarketAndIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.OrderByMarketAndIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.OrderByMarketAndIDRequest.displayName = 'proto.datanode.api.v1.OrderByMarketAndIDRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.OrderByMarketAndIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.OrderByMarketAndIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.OrderByMarketAndIDResponse.displayName = 'proto.datanode.api.v1.OrderByMarketAndIDResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.OrderByReferenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.OrderByReferenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.OrderByReferenceRequest.displayName = 'proto.datanode.api.v1.OrderByReferenceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.OrderByReferenceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.OrderByReferenceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.OrderByReferenceResponse.displayName = 'proto.datanode.api.v1.OrderByReferenceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.MarketsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.MarketsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.MarketsRequest.displayName = 'proto.datanode.api.v1.MarketsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.MarketsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.MarketsResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.MarketsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.MarketsResponse.displayName = 'proto.datanode.api.v1.MarketsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.CandlesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.CandlesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.CandlesRequest.displayName = 'proto.datanode.api.v1.CandlesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.CandlesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.CandlesResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.CandlesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.CandlesResponse.displayName = 'proto.datanode.api.v1.CandlesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.MarketDepthRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.MarketDepthRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.MarketDepthRequest.displayName = 'proto.datanode.api.v1.MarketDepthRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.MarketDepthResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.MarketDepthResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.MarketDepthResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.MarketDepthResponse.displayName = 'proto.datanode.api.v1.MarketDepthResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.TradesByMarketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.TradesByMarketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.TradesByMarketRequest.displayName = 'proto.datanode.api.v1.TradesByMarketRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.TradesByMarketResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.TradesByMarketResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.TradesByMarketResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.TradesByMarketResponse.displayName = 'proto.datanode.api.v1.TradesByMarketResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.PositionsByPartyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.PositionsByPartyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.PositionsByPartyRequest.displayName = 'proto.datanode.api.v1.PositionsByPartyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.PositionsByPartyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.PositionsByPartyResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.PositionsByPartyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.PositionsByPartyResponse.displayName = 'proto.datanode.api.v1.PositionsByPartyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetVegaTimeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.GetVegaTimeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetVegaTimeRequest.displayName = 'proto.datanode.api.v1.GetVegaTimeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetVegaTimeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.GetVegaTimeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetVegaTimeResponse.displayName = 'proto.datanode.api.v1.GetVegaTimeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.Pagination = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.Pagination, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.Pagination.displayName = 'proto.datanode.api.v1.Pagination';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.OrdersSubscribeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.OrdersSubscribeResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.OrdersSubscribeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.OrdersSubscribeResponse.displayName = 'proto.datanode.api.v1.OrdersSubscribeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.TradesSubscribeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.TradesSubscribeResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.TradesSubscribeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.TradesSubscribeResponse.displayName = 'proto.datanode.api.v1.TradesSubscribeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.TransferResponsesSubscribeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.TransferResponsesSubscribeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.TransferResponsesSubscribeRequest.displayName = 'proto.datanode.api.v1.TransferResponsesSubscribeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.TransferResponsesSubscribeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.TransferResponsesSubscribeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.TransferResponsesSubscribeResponse.displayName = 'proto.datanode.api.v1.TransferResponsesSubscribeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.PartyAccountsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.PartyAccountsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.PartyAccountsRequest.displayName = 'proto.datanode.api.v1.PartyAccountsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.PartyAccountsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.PartyAccountsResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.PartyAccountsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.PartyAccountsResponse.displayName = 'proto.datanode.api.v1.PartyAccountsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.MarketAccountsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.MarketAccountsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.MarketAccountsRequest.displayName = 'proto.datanode.api.v1.MarketAccountsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.MarketAccountsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.MarketAccountsResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.MarketAccountsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.MarketAccountsResponse.displayName = 'proto.datanode.api.v1.MarketAccountsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.FeeInfrastructureAccountsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.FeeInfrastructureAccountsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.FeeInfrastructureAccountsRequest.displayName = 'proto.datanode.api.v1.FeeInfrastructureAccountsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.FeeInfrastructureAccountsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.FeeInfrastructureAccountsResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.FeeInfrastructureAccountsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.FeeInfrastructureAccountsResponse.displayName = 'proto.datanode.api.v1.FeeInfrastructureAccountsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GlobalRewardPoolAccountsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.GlobalRewardPoolAccountsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GlobalRewardPoolAccountsRequest.displayName = 'proto.datanode.api.v1.GlobalRewardPoolAccountsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GlobalRewardPoolAccountsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.GlobalRewardPoolAccountsResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.GlobalRewardPoolAccountsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GlobalRewardPoolAccountsResponse.displayName = 'proto.datanode.api.v1.GlobalRewardPoolAccountsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.OrderByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.OrderByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.OrderByIDRequest.displayName = 'proto.datanode.api.v1.OrderByIDRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.OrderByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.OrderByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.OrderByIDResponse.displayName = 'proto.datanode.api.v1.OrderByIDResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.OrderVersionsByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.OrderVersionsByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.OrderVersionsByIDRequest.displayName = 'proto.datanode.api.v1.OrderVersionsByIDRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.OrderVersionsByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.OrderVersionsByIDResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.OrderVersionsByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.OrderVersionsByIDResponse.displayName = 'proto.datanode.api.v1.OrderVersionsByIDResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.EstimateFeeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.EstimateFeeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.EstimateFeeRequest.displayName = 'proto.datanode.api.v1.EstimateFeeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.EstimateFeeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.EstimateFeeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.EstimateFeeResponse.displayName = 'proto.datanode.api.v1.EstimateFeeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.EstimateMarginRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.EstimateMarginRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.EstimateMarginRequest.displayName = 'proto.datanode.api.v1.EstimateMarginRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.EstimateMarginResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.EstimateMarginResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.EstimateMarginResponse.displayName = 'proto.datanode.api.v1.EstimateMarginResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.ObserveEventBusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.ObserveEventBusRequest.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.ObserveEventBusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.ObserveEventBusRequest.displayName = 'proto.datanode.api.v1.ObserveEventBusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.ObserveEventBusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.ObserveEventBusResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.ObserveEventBusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.ObserveEventBusResponse.displayName = 'proto.datanode.api.v1.ObserveEventBusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.WithdrawalsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.WithdrawalsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.WithdrawalsRequest.displayName = 'proto.datanode.api.v1.WithdrawalsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.WithdrawalsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.WithdrawalsResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.WithdrawalsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.WithdrawalsResponse.displayName = 'proto.datanode.api.v1.WithdrawalsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.WithdrawalRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.WithdrawalRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.WithdrawalRequest.displayName = 'proto.datanode.api.v1.WithdrawalRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.WithdrawalResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.WithdrawalResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.WithdrawalResponse.displayName = 'proto.datanode.api.v1.WithdrawalResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.ERC20WithdrawalApprovalRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.ERC20WithdrawalApprovalRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.ERC20WithdrawalApprovalRequest.displayName = 'proto.datanode.api.v1.ERC20WithdrawalApprovalRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.ERC20WithdrawalApprovalResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.ERC20WithdrawalApprovalResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.ERC20WithdrawalApprovalResponse.displayName = 'proto.datanode.api.v1.ERC20WithdrawalApprovalResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.DepositsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.DepositsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.DepositsRequest.displayName = 'proto.datanode.api.v1.DepositsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.DepositsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.DepositsResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.DepositsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.DepositsResponse.displayName = 'proto.datanode.api.v1.DepositsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.DepositRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.DepositRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.DepositRequest.displayName = 'proto.datanode.api.v1.DepositRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.DepositResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.DepositResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.DepositResponse.displayName = 'proto.datanode.api.v1.DepositResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.NetworkParametersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.NetworkParametersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.NetworkParametersRequest.displayName = 'proto.datanode.api.v1.NetworkParametersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.NetworkParametersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.NetworkParametersResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.NetworkParametersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.NetworkParametersResponse.displayName = 'proto.datanode.api.v1.NetworkParametersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.LiquidityProvisionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.LiquidityProvisionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.LiquidityProvisionsRequest.displayName = 'proto.datanode.api.v1.LiquidityProvisionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.LiquidityProvisionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.LiquidityProvisionsResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.LiquidityProvisionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.LiquidityProvisionsResponse.displayName = 'proto.datanode.api.v1.LiquidityProvisionsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.OracleSpecRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.OracleSpecRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.OracleSpecRequest.displayName = 'proto.datanode.api.v1.OracleSpecRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.OracleSpecResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.OracleSpecResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.OracleSpecResponse.displayName = 'proto.datanode.api.v1.OracleSpecResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.OracleSpecsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.OracleSpecsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.OracleSpecsRequest.displayName = 'proto.datanode.api.v1.OracleSpecsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.OracleSpecsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.OracleSpecsResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.OracleSpecsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.OracleSpecsResponse.displayName = 'proto.datanode.api.v1.OracleSpecsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.OracleDataBySpecRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.OracleDataBySpecRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.OracleDataBySpecRequest.displayName = 'proto.datanode.api.v1.OracleDataBySpecRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.OracleDataBySpecResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.OracleDataBySpecResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.OracleDataBySpecResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.OracleDataBySpecResponse.displayName = 'proto.datanode.api.v1.OracleDataBySpecResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.ObserveRewardDetailsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.ObserveRewardDetailsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.ObserveRewardDetailsRequest.displayName = 'proto.datanode.api.v1.ObserveRewardDetailsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.ObserveRewardDetailsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.ObserveRewardDetailsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.ObserveRewardDetailsResponse.displayName = 'proto.datanode.api.v1.ObserveRewardDetailsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetRewardDetailsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.GetRewardDetailsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetRewardDetailsRequest.displayName = 'proto.datanode.api.v1.GetRewardDetailsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.GetRewardDetailsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.GetRewardDetailsResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.GetRewardDetailsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.GetRewardDetailsResponse.displayName = 'proto.datanode.api.v1.GetRewardDetailsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.Checkpoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.Checkpoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.Checkpoint.displayName = 'proto.datanode.api.v1.Checkpoint';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.CheckpointsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datanode.api.v1.CheckpointsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.CheckpointsRequest.displayName = 'proto.datanode.api.v1.CheckpointsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.datanode.api.v1.CheckpointsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.datanode.api.v1.CheckpointsResponse.repeatedFields_, null);
};
goog.inherits(proto.datanode.api.v1.CheckpointsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datanode.api.v1.CheckpointsResponse.displayName = 'proto.datanode.api.v1.CheckpointsResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.DelegationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.DelegationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.DelegationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.DelegationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    party: jspb.Message.getFieldWithDefault(msg, 1, ""),
    nodeId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    epochSeq: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.DelegationsRequest}
 */
proto.datanode.api.v1.DelegationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.DelegationsRequest;
  return proto.datanode.api.v1.DelegationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.DelegationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.DelegationsRequest}
 */
proto.datanode.api.v1.DelegationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParty(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEpochSeq(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.DelegationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.DelegationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.DelegationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.DelegationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParty();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNodeId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEpochSeq();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string party = 1;
 * @return {string}
 */
proto.datanode.api.v1.DelegationsRequest.prototype.getParty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.DelegationsRequest} returns this
 */
proto.datanode.api.v1.DelegationsRequest.prototype.setParty = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string node_id = 2;
 * @return {string}
 */
proto.datanode.api.v1.DelegationsRequest.prototype.getNodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.DelegationsRequest} returns this
 */
proto.datanode.api.v1.DelegationsRequest.prototype.setNodeId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string epoch_seq = 3;
 * @return {string}
 */
proto.datanode.api.v1.DelegationsRequest.prototype.getEpochSeq = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.DelegationsRequest} returns this
 */
proto.datanode.api.v1.DelegationsRequest.prototype.setEpochSeq = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.DelegationsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.DelegationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.DelegationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.DelegationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.DelegationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    delegationsList: jspb.Message.toObjectList(msg.getDelegationsList(),
    vega_vega_pb.Delegation.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.DelegationsResponse}
 */
proto.datanode.api.v1.DelegationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.DelegationsResponse;
  return proto.datanode.api.v1.DelegationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.DelegationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.DelegationsResponse}
 */
proto.datanode.api.v1.DelegationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Delegation;
      reader.readMessage(value,vega_vega_pb.Delegation.deserializeBinaryFromReader);
      msg.addDelegations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.DelegationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.DelegationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.DelegationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.DelegationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDelegationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_vega_pb.Delegation.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Delegation delegations = 1;
 * @return {!Array<!proto.vega.Delegation>}
 */
proto.datanode.api.v1.DelegationsResponse.prototype.getDelegationsList = function() {
  return /** @type{!Array<!proto.vega.Delegation>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.Delegation, 1));
};


/**
 * @param {!Array<!proto.vega.Delegation>} value
 * @return {!proto.datanode.api.v1.DelegationsResponse} returns this
*/
proto.datanode.api.v1.DelegationsResponse.prototype.setDelegationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Delegation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Delegation}
 */
proto.datanode.api.v1.DelegationsResponse.prototype.addDelegations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Delegation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.DelegationsResponse} returns this
 */
proto.datanode.api.v1.DelegationsResponse.prototype.clearDelegationsList = function() {
  return this.setDelegationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.ObserveDelegationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.ObserveDelegationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.ObserveDelegationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.ObserveDelegationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    party: jspb.Message.getFieldWithDefault(msg, 1, ""),
    nodeId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.ObserveDelegationsRequest}
 */
proto.datanode.api.v1.ObserveDelegationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.ObserveDelegationsRequest;
  return proto.datanode.api.v1.ObserveDelegationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.ObserveDelegationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.ObserveDelegationsRequest}
 */
proto.datanode.api.v1.ObserveDelegationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParty(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.ObserveDelegationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.ObserveDelegationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.ObserveDelegationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.ObserveDelegationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParty();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNodeId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string party = 1;
 * @return {string}
 */
proto.datanode.api.v1.ObserveDelegationsRequest.prototype.getParty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.ObserveDelegationsRequest} returns this
 */
proto.datanode.api.v1.ObserveDelegationsRequest.prototype.setParty = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string node_id = 2;
 * @return {string}
 */
proto.datanode.api.v1.ObserveDelegationsRequest.prototype.getNodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.ObserveDelegationsRequest} returns this
 */
proto.datanode.api.v1.ObserveDelegationsRequest.prototype.setNodeId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.ObserveDelegationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.ObserveDelegationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.ObserveDelegationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.ObserveDelegationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    delegation: (f = msg.getDelegation()) && vega_vega_pb.Delegation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.ObserveDelegationsResponse}
 */
proto.datanode.api.v1.ObserveDelegationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.ObserveDelegationsResponse;
  return proto.datanode.api.v1.ObserveDelegationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.ObserveDelegationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.ObserveDelegationsResponse}
 */
proto.datanode.api.v1.ObserveDelegationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Delegation;
      reader.readMessage(value,vega_vega_pb.Delegation.deserializeBinaryFromReader);
      msg.setDelegation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.ObserveDelegationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.ObserveDelegationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.ObserveDelegationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.ObserveDelegationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDelegation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_vega_pb.Delegation.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.Delegation delegation = 1;
 * @return {?proto.vega.Delegation}
 */
proto.datanode.api.v1.ObserveDelegationsResponse.prototype.getDelegation = function() {
  return /** @type{?proto.vega.Delegation} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.Delegation, 1));
};


/**
 * @param {?proto.vega.Delegation|undefined} value
 * @return {!proto.datanode.api.v1.ObserveDelegationsResponse} returns this
*/
proto.datanode.api.v1.ObserveDelegationsResponse.prototype.setDelegation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.ObserveDelegationsResponse} returns this
 */
proto.datanode.api.v1.ObserveDelegationsResponse.prototype.clearDelegation = function() {
  return this.setDelegation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.ObserveDelegationsResponse.prototype.hasDelegation = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.PartyStakeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.PartyStakeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.PartyStakeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.PartyStakeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    party: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.PartyStakeRequest}
 */
proto.datanode.api.v1.PartyStakeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.PartyStakeRequest;
  return proto.datanode.api.v1.PartyStakeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.PartyStakeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.PartyStakeRequest}
 */
proto.datanode.api.v1.PartyStakeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParty(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.PartyStakeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.PartyStakeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.PartyStakeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.PartyStakeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParty();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string party = 1;
 * @return {string}
 */
proto.datanode.api.v1.PartyStakeRequest.prototype.getParty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.PartyStakeRequest} returns this
 */
proto.datanode.api.v1.PartyStakeRequest.prototype.setParty = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.PartyStakeResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.PartyStakeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.PartyStakeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.PartyStakeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.PartyStakeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    currentStakeAvailable: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stakeLinkingsList: jspb.Message.toObjectList(msg.getStakeLinkingsList(),
    vega_events_v1_events_pb.StakeLinking.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.PartyStakeResponse}
 */
proto.datanode.api.v1.PartyStakeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.PartyStakeResponse;
  return proto.datanode.api.v1.PartyStakeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.PartyStakeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.PartyStakeResponse}
 */
proto.datanode.api.v1.PartyStakeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrentStakeAvailable(value);
      break;
    case 2:
      var value = new vega_events_v1_events_pb.StakeLinking;
      reader.readMessage(value,vega_events_v1_events_pb.StakeLinking.deserializeBinaryFromReader);
      msg.addStakeLinkings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.PartyStakeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.PartyStakeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.PartyStakeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.PartyStakeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrentStakeAvailable();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStakeLinkingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      vega_events_v1_events_pb.StakeLinking.serializeBinaryToWriter
    );
  }
};


/**
 * optional string current_stake_available = 1;
 * @return {string}
 */
proto.datanode.api.v1.PartyStakeResponse.prototype.getCurrentStakeAvailable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.PartyStakeResponse} returns this
 */
proto.datanode.api.v1.PartyStakeResponse.prototype.setCurrentStakeAvailable = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated vega.events.v1.StakeLinking stake_linkings = 2;
 * @return {!Array<!proto.vega.events.v1.StakeLinking>}
 */
proto.datanode.api.v1.PartyStakeResponse.prototype.getStakeLinkingsList = function() {
  return /** @type{!Array<!proto.vega.events.v1.StakeLinking>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_events_v1_events_pb.StakeLinking, 2));
};


/**
 * @param {!Array<!proto.vega.events.v1.StakeLinking>} value
 * @return {!proto.datanode.api.v1.PartyStakeResponse} returns this
*/
proto.datanode.api.v1.PartyStakeResponse.prototype.setStakeLinkingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vega.events.v1.StakeLinking=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.events.v1.StakeLinking}
 */
proto.datanode.api.v1.PartyStakeResponse.prototype.addStakeLinkings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vega.events.v1.StakeLinking, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.PartyStakeResponse} returns this
 */
proto.datanode.api.v1.PartyStakeResponse.prototype.clearStakeLinkingsList = function() {
  return this.setStakeLinkingsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetNodeDataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetNodeDataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetNodeDataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetNodeDataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetNodeDataRequest}
 */
proto.datanode.api.v1.GetNodeDataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetNodeDataRequest;
  return proto.datanode.api.v1.GetNodeDataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetNodeDataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetNodeDataRequest}
 */
proto.datanode.api.v1.GetNodeDataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetNodeDataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetNodeDataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetNodeDataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetNodeDataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetNodeDataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetNodeDataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetNodeDataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetNodeDataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeData: (f = msg.getNodeData()) && vega_vega_pb.NodeData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetNodeDataResponse}
 */
proto.datanode.api.v1.GetNodeDataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetNodeDataResponse;
  return proto.datanode.api.v1.GetNodeDataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetNodeDataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetNodeDataResponse}
 */
proto.datanode.api.v1.GetNodeDataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.NodeData;
      reader.readMessage(value,vega_vega_pb.NodeData.deserializeBinaryFromReader);
      msg.setNodeData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetNodeDataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetNodeDataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetNodeDataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetNodeDataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_vega_pb.NodeData.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.NodeData node_data = 1;
 * @return {?proto.vega.NodeData}
 */
proto.datanode.api.v1.GetNodeDataResponse.prototype.getNodeData = function() {
  return /** @type{?proto.vega.NodeData} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.NodeData, 1));
};


/**
 * @param {?proto.vega.NodeData|undefined} value
 * @return {!proto.datanode.api.v1.GetNodeDataResponse} returns this
*/
proto.datanode.api.v1.GetNodeDataResponse.prototype.setNodeData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.GetNodeDataResponse} returns this
 */
proto.datanode.api.v1.GetNodeDataResponse.prototype.clearNodeData = function() {
  return this.setNodeData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.GetNodeDataResponse.prototype.hasNodeData = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetNodesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetNodesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetNodesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetNodesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetNodesRequest}
 */
proto.datanode.api.v1.GetNodesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetNodesRequest;
  return proto.datanode.api.v1.GetNodesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetNodesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetNodesRequest}
 */
proto.datanode.api.v1.GetNodesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetNodesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetNodesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetNodesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetNodesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.GetNodesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetNodesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetNodesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetNodesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetNodesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodesList: jspb.Message.toObjectList(msg.getNodesList(),
    vega_vega_pb.Node.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetNodesResponse}
 */
proto.datanode.api.v1.GetNodesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetNodesResponse;
  return proto.datanode.api.v1.GetNodesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetNodesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetNodesResponse}
 */
proto.datanode.api.v1.GetNodesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Node;
      reader.readMessage(value,vega_vega_pb.Node.deserializeBinaryFromReader);
      msg.addNodes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetNodesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetNodesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetNodesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetNodesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_vega_pb.Node.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Node nodes = 1;
 * @return {!Array<!proto.vega.Node>}
 */
proto.datanode.api.v1.GetNodesResponse.prototype.getNodesList = function() {
  return /** @type{!Array<!proto.vega.Node>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.Node, 1));
};


/**
 * @param {!Array<!proto.vega.Node>} value
 * @return {!proto.datanode.api.v1.GetNodesResponse} returns this
*/
proto.datanode.api.v1.GetNodesResponse.prototype.setNodesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Node=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Node}
 */
proto.datanode.api.v1.GetNodesResponse.prototype.addNodes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Node, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.GetNodesResponse} returns this
 */
proto.datanode.api.v1.GetNodesResponse.prototype.clearNodesList = function() {
  return this.setNodesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetNodeByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetNodeByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetNodeByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetNodeByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetNodeByIDRequest}
 */
proto.datanode.api.v1.GetNodeByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetNodeByIDRequest;
  return proto.datanode.api.v1.GetNodeByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetNodeByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetNodeByIDRequest}
 */
proto.datanode.api.v1.GetNodeByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetNodeByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetNodeByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetNodeByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetNodeByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.datanode.api.v1.GetNodeByIDRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.GetNodeByIDRequest} returns this
 */
proto.datanode.api.v1.GetNodeByIDRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetNodeByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetNodeByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetNodeByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetNodeByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    node: (f = msg.getNode()) && vega_vega_pb.Node.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetNodeByIDResponse}
 */
proto.datanode.api.v1.GetNodeByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetNodeByIDResponse;
  return proto.datanode.api.v1.GetNodeByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetNodeByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetNodeByIDResponse}
 */
proto.datanode.api.v1.GetNodeByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Node;
      reader.readMessage(value,vega_vega_pb.Node.deserializeBinaryFromReader);
      msg.setNode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetNodeByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetNodeByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetNodeByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetNodeByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNode();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_vega_pb.Node.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.Node node = 1;
 * @return {?proto.vega.Node}
 */
proto.datanode.api.v1.GetNodeByIDResponse.prototype.getNode = function() {
  return /** @type{?proto.vega.Node} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.Node, 1));
};


/**
 * @param {?proto.vega.Node|undefined} value
 * @return {!proto.datanode.api.v1.GetNodeByIDResponse} returns this
*/
proto.datanode.api.v1.GetNodeByIDResponse.prototype.setNode = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.GetNodeByIDResponse} returns this
 */
proto.datanode.api.v1.GetNodeByIDResponse.prototype.clearNode = function() {
  return this.setNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.GetNodeByIDResponse.prototype.hasNode = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetEpochRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetEpochRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetEpochRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetEpochRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetEpochRequest}
 */
proto.datanode.api.v1.GetEpochRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetEpochRequest;
  return proto.datanode.api.v1.GetEpochRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetEpochRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetEpochRequest}
 */
proto.datanode.api.v1.GetEpochRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetEpochRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetEpochRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetEpochRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetEpochRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.datanode.api.v1.GetEpochRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.datanode.api.v1.GetEpochRequest} returns this
 */
proto.datanode.api.v1.GetEpochRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetEpochResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetEpochResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetEpochResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetEpochResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    epoch: (f = msg.getEpoch()) && vega_vega_pb.Epoch.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetEpochResponse}
 */
proto.datanode.api.v1.GetEpochResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetEpochResponse;
  return proto.datanode.api.v1.GetEpochResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetEpochResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetEpochResponse}
 */
proto.datanode.api.v1.GetEpochResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Epoch;
      reader.readMessage(value,vega_vega_pb.Epoch.deserializeBinaryFromReader);
      msg.setEpoch(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetEpochResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetEpochResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetEpochResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetEpochResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEpoch();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_vega_pb.Epoch.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.Epoch epoch = 1;
 * @return {?proto.vega.Epoch}
 */
proto.datanode.api.v1.GetEpochResponse.prototype.getEpoch = function() {
  return /** @type{?proto.vega.Epoch} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.Epoch, 1));
};


/**
 * @param {?proto.vega.Epoch|undefined} value
 * @return {!proto.datanode.api.v1.GetEpochResponse} returns this
*/
proto.datanode.api.v1.GetEpochResponse.prototype.setEpoch = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.GetEpochResponse} returns this
 */
proto.datanode.api.v1.GetEpochResponse.prototype.clearEpoch = function() {
  return this.setEpoch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.GetEpochResponse.prototype.hasEpoch = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.KeyRotation.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.KeyRotation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.KeyRotation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.KeyRotation.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    oldPubKey: jspb.Message.getFieldWithDefault(msg, 2, ""),
    newPubKey: jspb.Message.getFieldWithDefault(msg, 3, ""),
    blockHeight: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.KeyRotation}
 */
proto.datanode.api.v1.KeyRotation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.KeyRotation;
  return proto.datanode.api.v1.KeyRotation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.KeyRotation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.KeyRotation}
 */
proto.datanode.api.v1.KeyRotation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOldPubKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewPubKey(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockHeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.KeyRotation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.KeyRotation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.KeyRotation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.KeyRotation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOldPubKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNewPubKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBlockHeight();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional string node_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.KeyRotation.prototype.getNodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.KeyRotation} returns this
 */
proto.datanode.api.v1.KeyRotation.prototype.setNodeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string old_pub_key = 2;
 * @return {string}
 */
proto.datanode.api.v1.KeyRotation.prototype.getOldPubKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.KeyRotation} returns this
 */
proto.datanode.api.v1.KeyRotation.prototype.setOldPubKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string new_pub_key = 3;
 * @return {string}
 */
proto.datanode.api.v1.KeyRotation.prototype.getNewPubKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.KeyRotation} returns this
 */
proto.datanode.api.v1.KeyRotation.prototype.setNewPubKey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 block_height = 4;
 * @return {number}
 */
proto.datanode.api.v1.KeyRotation.prototype.getBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.datanode.api.v1.KeyRotation} returns this
 */
proto.datanode.api.v1.KeyRotation.prototype.setBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetKeyRotationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetKeyRotationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetKeyRotationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetKeyRotationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetKeyRotationsRequest}
 */
proto.datanode.api.v1.GetKeyRotationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetKeyRotationsRequest;
  return proto.datanode.api.v1.GetKeyRotationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetKeyRotationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetKeyRotationsRequest}
 */
proto.datanode.api.v1.GetKeyRotationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetKeyRotationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetKeyRotationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetKeyRotationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetKeyRotationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.GetKeyRotationsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetKeyRotationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetKeyRotationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetKeyRotationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetKeyRotationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rotationsList: jspb.Message.toObjectList(msg.getRotationsList(),
    proto.datanode.api.v1.KeyRotation.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetKeyRotationsResponse}
 */
proto.datanode.api.v1.GetKeyRotationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetKeyRotationsResponse;
  return proto.datanode.api.v1.GetKeyRotationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetKeyRotationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetKeyRotationsResponse}
 */
proto.datanode.api.v1.GetKeyRotationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.datanode.api.v1.KeyRotation;
      reader.readMessage(value,proto.datanode.api.v1.KeyRotation.deserializeBinaryFromReader);
      msg.addRotations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetKeyRotationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetKeyRotationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetKeyRotationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetKeyRotationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRotationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.datanode.api.v1.KeyRotation.serializeBinaryToWriter
    );
  }
};


/**
 * repeated KeyRotation rotations = 1;
 * @return {!Array<!proto.datanode.api.v1.KeyRotation>}
 */
proto.datanode.api.v1.GetKeyRotationsResponse.prototype.getRotationsList = function() {
  return /** @type{!Array<!proto.datanode.api.v1.KeyRotation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.datanode.api.v1.KeyRotation, 1));
};


/**
 * @param {!Array<!proto.datanode.api.v1.KeyRotation>} value
 * @return {!proto.datanode.api.v1.GetKeyRotationsResponse} returns this
*/
proto.datanode.api.v1.GetKeyRotationsResponse.prototype.setRotationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.datanode.api.v1.KeyRotation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.datanode.api.v1.KeyRotation}
 */
proto.datanode.api.v1.GetKeyRotationsResponse.prototype.addRotations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.datanode.api.v1.KeyRotation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.GetKeyRotationsResponse} returns this
 */
proto.datanode.api.v1.GetKeyRotationsResponse.prototype.clearRotationsList = function() {
  return this.setRotationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetKeyRotationsByNodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetKeyRotationsByNodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetKeyRotationsByNodeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetKeyRotationsByNodeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetKeyRotationsByNodeRequest}
 */
proto.datanode.api.v1.GetKeyRotationsByNodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetKeyRotationsByNodeRequest;
  return proto.datanode.api.v1.GetKeyRotationsByNodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetKeyRotationsByNodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetKeyRotationsByNodeRequest}
 */
proto.datanode.api.v1.GetKeyRotationsByNodeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetKeyRotationsByNodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetKeyRotationsByNodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetKeyRotationsByNodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetKeyRotationsByNodeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string node_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.GetKeyRotationsByNodeRequest.prototype.getNodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.GetKeyRotationsByNodeRequest} returns this
 */
proto.datanode.api.v1.GetKeyRotationsByNodeRequest.prototype.setNodeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.GetKeyRotationsByNodeResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetKeyRotationsByNodeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetKeyRotationsByNodeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetKeyRotationsByNodeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetKeyRotationsByNodeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rotationsList: jspb.Message.toObjectList(msg.getRotationsList(),
    proto.datanode.api.v1.KeyRotation.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetKeyRotationsByNodeResponse}
 */
proto.datanode.api.v1.GetKeyRotationsByNodeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetKeyRotationsByNodeResponse;
  return proto.datanode.api.v1.GetKeyRotationsByNodeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetKeyRotationsByNodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetKeyRotationsByNodeResponse}
 */
proto.datanode.api.v1.GetKeyRotationsByNodeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.datanode.api.v1.KeyRotation;
      reader.readMessage(value,proto.datanode.api.v1.KeyRotation.deserializeBinaryFromReader);
      msg.addRotations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetKeyRotationsByNodeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetKeyRotationsByNodeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetKeyRotationsByNodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetKeyRotationsByNodeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRotationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.datanode.api.v1.KeyRotation.serializeBinaryToWriter
    );
  }
};


/**
 * repeated KeyRotation rotations = 1;
 * @return {!Array<!proto.datanode.api.v1.KeyRotation>}
 */
proto.datanode.api.v1.GetKeyRotationsByNodeResponse.prototype.getRotationsList = function() {
  return /** @type{!Array<!proto.datanode.api.v1.KeyRotation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.datanode.api.v1.KeyRotation, 1));
};


/**
 * @param {!Array<!proto.datanode.api.v1.KeyRotation>} value
 * @return {!proto.datanode.api.v1.GetKeyRotationsByNodeResponse} returns this
*/
proto.datanode.api.v1.GetKeyRotationsByNodeResponse.prototype.setRotationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.datanode.api.v1.KeyRotation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.datanode.api.v1.KeyRotation}
 */
proto.datanode.api.v1.GetKeyRotationsByNodeResponse.prototype.addRotations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.datanode.api.v1.KeyRotation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.GetKeyRotationsByNodeResponse} returns this
 */
proto.datanode.api.v1.GetKeyRotationsByNodeResponse.prototype.clearRotationsList = function() {
  return this.setRotationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.AssetsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.AssetsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.AssetsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.AssetsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.AssetsRequest}
 */
proto.datanode.api.v1.AssetsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.AssetsRequest;
  return proto.datanode.api.v1.AssetsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.AssetsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.AssetsRequest}
 */
proto.datanode.api.v1.AssetsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.AssetsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.AssetsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.AssetsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.AssetsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.AssetsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.AssetsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.AssetsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.AssetsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.AssetsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetsList: jspb.Message.toObjectList(msg.getAssetsList(),
    vega_assets_pb.Asset.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.AssetsResponse}
 */
proto.datanode.api.v1.AssetsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.AssetsResponse;
  return proto.datanode.api.v1.AssetsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.AssetsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.AssetsResponse}
 */
proto.datanode.api.v1.AssetsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_assets_pb.Asset;
      reader.readMessage(value,vega_assets_pb.Asset.deserializeBinaryFromReader);
      msg.addAssets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.AssetsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.AssetsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.AssetsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.AssetsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_assets_pb.Asset.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Asset assets = 1;
 * @return {!Array<!proto.vega.Asset>}
 */
proto.datanode.api.v1.AssetsResponse.prototype.getAssetsList = function() {
  return /** @type{!Array<!proto.vega.Asset>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_assets_pb.Asset, 1));
};


/**
 * @param {!Array<!proto.vega.Asset>} value
 * @return {!proto.datanode.api.v1.AssetsResponse} returns this
*/
proto.datanode.api.v1.AssetsResponse.prototype.setAssetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Asset=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Asset}
 */
proto.datanode.api.v1.AssetsResponse.prototype.addAssets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Asset, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.AssetsResponse} returns this
 */
proto.datanode.api.v1.AssetsResponse.prototype.clearAssetsList = function() {
  return this.setAssetsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.AssetByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.AssetByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.AssetByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.AssetByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.AssetByIDRequest}
 */
proto.datanode.api.v1.AssetByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.AssetByIDRequest;
  return proto.datanode.api.v1.AssetByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.AssetByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.AssetByIDRequest}
 */
proto.datanode.api.v1.AssetByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.AssetByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.AssetByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.AssetByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.AssetByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.datanode.api.v1.AssetByIDRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.AssetByIDRequest} returns this
 */
proto.datanode.api.v1.AssetByIDRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.AssetByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.AssetByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.AssetByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.AssetByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    asset: (f = msg.getAsset()) && vega_assets_pb.Asset.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.AssetByIDResponse}
 */
proto.datanode.api.v1.AssetByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.AssetByIDResponse;
  return proto.datanode.api.v1.AssetByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.AssetByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.AssetByIDResponse}
 */
proto.datanode.api.v1.AssetByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_assets_pb.Asset;
      reader.readMessage(value,vega_assets_pb.Asset.deserializeBinaryFromReader);
      msg.setAsset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.AssetByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.AssetByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.AssetByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.AssetByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAsset();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_assets_pb.Asset.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.Asset asset = 1;
 * @return {?proto.vega.Asset}
 */
proto.datanode.api.v1.AssetByIDResponse.prototype.getAsset = function() {
  return /** @type{?proto.vega.Asset} */ (
    jspb.Message.getWrapperField(this, vega_assets_pb.Asset, 1));
};


/**
 * @param {?proto.vega.Asset|undefined} value
 * @return {!proto.datanode.api.v1.AssetByIDResponse} returns this
*/
proto.datanode.api.v1.AssetByIDResponse.prototype.setAsset = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.AssetByIDResponse} returns this
 */
proto.datanode.api.v1.AssetByIDResponse.prototype.clearAsset = function() {
  return this.setAsset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.AssetByIDResponse.prototype.hasAsset = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetNodeSignaturesAggregateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetNodeSignaturesAggregateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetNodeSignaturesAggregateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetNodeSignaturesAggregateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetNodeSignaturesAggregateRequest}
 */
proto.datanode.api.v1.GetNodeSignaturesAggregateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetNodeSignaturesAggregateRequest;
  return proto.datanode.api.v1.GetNodeSignaturesAggregateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetNodeSignaturesAggregateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetNodeSignaturesAggregateRequest}
 */
proto.datanode.api.v1.GetNodeSignaturesAggregateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetNodeSignaturesAggregateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetNodeSignaturesAggregateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetNodeSignaturesAggregateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetNodeSignaturesAggregateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.datanode.api.v1.GetNodeSignaturesAggregateRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.GetNodeSignaturesAggregateRequest} returns this
 */
proto.datanode.api.v1.GetNodeSignaturesAggregateRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.GetNodeSignaturesAggregateResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetNodeSignaturesAggregateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetNodeSignaturesAggregateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetNodeSignaturesAggregateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetNodeSignaturesAggregateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    signaturesList: jspb.Message.toObjectList(msg.getSignaturesList(),
    vega_commands_v1_validator_commands_pb.NodeSignature.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetNodeSignaturesAggregateResponse}
 */
proto.datanode.api.v1.GetNodeSignaturesAggregateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetNodeSignaturesAggregateResponse;
  return proto.datanode.api.v1.GetNodeSignaturesAggregateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetNodeSignaturesAggregateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetNodeSignaturesAggregateResponse}
 */
proto.datanode.api.v1.GetNodeSignaturesAggregateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_commands_v1_validator_commands_pb.NodeSignature;
      reader.readMessage(value,vega_commands_v1_validator_commands_pb.NodeSignature.deserializeBinaryFromReader);
      msg.addSignatures(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetNodeSignaturesAggregateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetNodeSignaturesAggregateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetNodeSignaturesAggregateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetNodeSignaturesAggregateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignaturesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_commands_v1_validator_commands_pb.NodeSignature.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.commands.v1.NodeSignature signatures = 1;
 * @return {!Array<!proto.vega.commands.v1.NodeSignature>}
 */
proto.datanode.api.v1.GetNodeSignaturesAggregateResponse.prototype.getSignaturesList = function() {
  return /** @type{!Array<!proto.vega.commands.v1.NodeSignature>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_commands_v1_validator_commands_pb.NodeSignature, 1));
};


/**
 * @param {!Array<!proto.vega.commands.v1.NodeSignature>} value
 * @return {!proto.datanode.api.v1.GetNodeSignaturesAggregateResponse} returns this
*/
proto.datanode.api.v1.GetNodeSignaturesAggregateResponse.prototype.setSignaturesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.commands.v1.NodeSignature=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.commands.v1.NodeSignature}
 */
proto.datanode.api.v1.GetNodeSignaturesAggregateResponse.prototype.addSignatures = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.commands.v1.NodeSignature, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.GetNodeSignaturesAggregateResponse} returns this
 */
proto.datanode.api.v1.GetNodeSignaturesAggregateResponse.prototype.clearSignaturesList = function() {
  return this.setSignaturesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.OptionalProposalState.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.OptionalProposalState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.OptionalProposalState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OptionalProposalState.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.OptionalProposalState}
 */
proto.datanode.api.v1.OptionalProposalState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.OptionalProposalState;
  return proto.datanode.api.v1.OptionalProposalState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.OptionalProposalState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.OptionalProposalState}
 */
proto.datanode.api.v1.OptionalProposalState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.vega.Proposal.State} */ (reader.readEnum());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.OptionalProposalState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.OptionalProposalState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.OptionalProposalState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OptionalProposalState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional vega.Proposal.State value = 1;
 * @return {!proto.vega.Proposal.State}
 */
proto.datanode.api.v1.OptionalProposalState.prototype.getValue = function() {
  return /** @type {!proto.vega.Proposal.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.vega.Proposal.State} value
 * @return {!proto.datanode.api.v1.OptionalProposalState} returns this
 */
proto.datanode.api.v1.OptionalProposalState.prototype.setValue = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetProposalsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetProposalsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetProposalsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetProposalsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    selectInState: (f = msg.getSelectInState()) && proto.datanode.api.v1.OptionalProposalState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetProposalsRequest}
 */
proto.datanode.api.v1.GetProposalsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetProposalsRequest;
  return proto.datanode.api.v1.GetProposalsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetProposalsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetProposalsRequest}
 */
proto.datanode.api.v1.GetProposalsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.datanode.api.v1.OptionalProposalState;
      reader.readMessage(value,proto.datanode.api.v1.OptionalProposalState.deserializeBinaryFromReader);
      msg.setSelectInState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetProposalsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetProposalsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetProposalsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetProposalsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelectInState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.datanode.api.v1.OptionalProposalState.serializeBinaryToWriter
    );
  }
};


/**
 * optional OptionalProposalState select_in_state = 1;
 * @return {?proto.datanode.api.v1.OptionalProposalState}
 */
proto.datanode.api.v1.GetProposalsRequest.prototype.getSelectInState = function() {
  return /** @type{?proto.datanode.api.v1.OptionalProposalState} */ (
    jspb.Message.getWrapperField(this, proto.datanode.api.v1.OptionalProposalState, 1));
};


/**
 * @param {?proto.datanode.api.v1.OptionalProposalState|undefined} value
 * @return {!proto.datanode.api.v1.GetProposalsRequest} returns this
*/
proto.datanode.api.v1.GetProposalsRequest.prototype.setSelectInState = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.GetProposalsRequest} returns this
 */
proto.datanode.api.v1.GetProposalsRequest.prototype.clearSelectInState = function() {
  return this.setSelectInState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.GetProposalsRequest.prototype.hasSelectInState = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.GetProposalsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetProposalsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetProposalsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetProposalsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetProposalsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    vega_governance_pb.GovernanceData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetProposalsResponse}
 */
proto.datanode.api.v1.GetProposalsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetProposalsResponse;
  return proto.datanode.api.v1.GetProposalsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetProposalsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetProposalsResponse}
 */
proto.datanode.api.v1.GetProposalsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_governance_pb.GovernanceData;
      reader.readMessage(value,vega_governance_pb.GovernanceData.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetProposalsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetProposalsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetProposalsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetProposalsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_governance_pb.GovernanceData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.GovernanceData data = 1;
 * @return {!Array<!proto.vega.GovernanceData>}
 */
proto.datanode.api.v1.GetProposalsResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.vega.GovernanceData>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_governance_pb.GovernanceData, 1));
};


/**
 * @param {!Array<!proto.vega.GovernanceData>} value
 * @return {!proto.datanode.api.v1.GetProposalsResponse} returns this
*/
proto.datanode.api.v1.GetProposalsResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.GovernanceData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.GovernanceData}
 */
proto.datanode.api.v1.GetProposalsResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.GovernanceData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.GetProposalsResponse} returns this
 */
proto.datanode.api.v1.GetProposalsResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetProposalsByPartyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetProposalsByPartyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetProposalsByPartyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetProposalsByPartyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    selectInState: (f = msg.getSelectInState()) && proto.datanode.api.v1.OptionalProposalState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetProposalsByPartyRequest}
 */
proto.datanode.api.v1.GetProposalsByPartyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetProposalsByPartyRequest;
  return proto.datanode.api.v1.GetProposalsByPartyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetProposalsByPartyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetProposalsByPartyRequest}
 */
proto.datanode.api.v1.GetProposalsByPartyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyId(value);
      break;
    case 2:
      var value = new proto.datanode.api.v1.OptionalProposalState;
      reader.readMessage(value,proto.datanode.api.v1.OptionalProposalState.deserializeBinaryFromReader);
      msg.setSelectInState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetProposalsByPartyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetProposalsByPartyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetProposalsByPartyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetProposalsByPartyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSelectInState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.datanode.api.v1.OptionalProposalState.serializeBinaryToWriter
    );
  }
};


/**
 * optional string party_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.GetProposalsByPartyRequest.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.GetProposalsByPartyRequest} returns this
 */
proto.datanode.api.v1.GetProposalsByPartyRequest.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional OptionalProposalState select_in_state = 2;
 * @return {?proto.datanode.api.v1.OptionalProposalState}
 */
proto.datanode.api.v1.GetProposalsByPartyRequest.prototype.getSelectInState = function() {
  return /** @type{?proto.datanode.api.v1.OptionalProposalState} */ (
    jspb.Message.getWrapperField(this, proto.datanode.api.v1.OptionalProposalState, 2));
};


/**
 * @param {?proto.datanode.api.v1.OptionalProposalState|undefined} value
 * @return {!proto.datanode.api.v1.GetProposalsByPartyRequest} returns this
*/
proto.datanode.api.v1.GetProposalsByPartyRequest.prototype.setSelectInState = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.GetProposalsByPartyRequest} returns this
 */
proto.datanode.api.v1.GetProposalsByPartyRequest.prototype.clearSelectInState = function() {
  return this.setSelectInState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.GetProposalsByPartyRequest.prototype.hasSelectInState = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.GetProposalsByPartyResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetProposalsByPartyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetProposalsByPartyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetProposalsByPartyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetProposalsByPartyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    vega_governance_pb.GovernanceData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetProposalsByPartyResponse}
 */
proto.datanode.api.v1.GetProposalsByPartyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetProposalsByPartyResponse;
  return proto.datanode.api.v1.GetProposalsByPartyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetProposalsByPartyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetProposalsByPartyResponse}
 */
proto.datanode.api.v1.GetProposalsByPartyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_governance_pb.GovernanceData;
      reader.readMessage(value,vega_governance_pb.GovernanceData.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetProposalsByPartyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetProposalsByPartyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetProposalsByPartyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetProposalsByPartyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_governance_pb.GovernanceData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.GovernanceData data = 1;
 * @return {!Array<!proto.vega.GovernanceData>}
 */
proto.datanode.api.v1.GetProposalsByPartyResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.vega.GovernanceData>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_governance_pb.GovernanceData, 1));
};


/**
 * @param {!Array<!proto.vega.GovernanceData>} value
 * @return {!proto.datanode.api.v1.GetProposalsByPartyResponse} returns this
*/
proto.datanode.api.v1.GetProposalsByPartyResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.GovernanceData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.GovernanceData}
 */
proto.datanode.api.v1.GetProposalsByPartyResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.GovernanceData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.GetProposalsByPartyResponse} returns this
 */
proto.datanode.api.v1.GetProposalsByPartyResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetVotesByPartyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetVotesByPartyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetVotesByPartyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetVotesByPartyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetVotesByPartyRequest}
 */
proto.datanode.api.v1.GetVotesByPartyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetVotesByPartyRequest;
  return proto.datanode.api.v1.GetVotesByPartyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetVotesByPartyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetVotesByPartyRequest}
 */
proto.datanode.api.v1.GetVotesByPartyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetVotesByPartyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetVotesByPartyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetVotesByPartyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetVotesByPartyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string party_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.GetVotesByPartyRequest.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.GetVotesByPartyRequest} returns this
 */
proto.datanode.api.v1.GetVotesByPartyRequest.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.GetVotesByPartyResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetVotesByPartyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetVotesByPartyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetVotesByPartyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetVotesByPartyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    votesList: jspb.Message.toObjectList(msg.getVotesList(),
    vega_governance_pb.Vote.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetVotesByPartyResponse}
 */
proto.datanode.api.v1.GetVotesByPartyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetVotesByPartyResponse;
  return proto.datanode.api.v1.GetVotesByPartyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetVotesByPartyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetVotesByPartyResponse}
 */
proto.datanode.api.v1.GetVotesByPartyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_governance_pb.Vote;
      reader.readMessage(value,vega_governance_pb.Vote.deserializeBinaryFromReader);
      msg.addVotes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetVotesByPartyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetVotesByPartyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetVotesByPartyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetVotesByPartyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVotesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_governance_pb.Vote.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Vote votes = 1;
 * @return {!Array<!proto.vega.Vote>}
 */
proto.datanode.api.v1.GetVotesByPartyResponse.prototype.getVotesList = function() {
  return /** @type{!Array<!proto.vega.Vote>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_governance_pb.Vote, 1));
};


/**
 * @param {!Array<!proto.vega.Vote>} value
 * @return {!proto.datanode.api.v1.GetVotesByPartyResponse} returns this
*/
proto.datanode.api.v1.GetVotesByPartyResponse.prototype.setVotesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Vote=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Vote}
 */
proto.datanode.api.v1.GetVotesByPartyResponse.prototype.addVotes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Vote, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.GetVotesByPartyResponse} returns this
 */
proto.datanode.api.v1.GetVotesByPartyResponse.prototype.clearVotesList = function() {
  return this.setVotesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetNewMarketProposalsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetNewMarketProposalsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetNewMarketProposalsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetNewMarketProposalsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    selectInState: (f = msg.getSelectInState()) && proto.datanode.api.v1.OptionalProposalState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetNewMarketProposalsRequest}
 */
proto.datanode.api.v1.GetNewMarketProposalsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetNewMarketProposalsRequest;
  return proto.datanode.api.v1.GetNewMarketProposalsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetNewMarketProposalsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetNewMarketProposalsRequest}
 */
proto.datanode.api.v1.GetNewMarketProposalsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.datanode.api.v1.OptionalProposalState;
      reader.readMessage(value,proto.datanode.api.v1.OptionalProposalState.deserializeBinaryFromReader);
      msg.setSelectInState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetNewMarketProposalsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetNewMarketProposalsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetNewMarketProposalsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetNewMarketProposalsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelectInState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.datanode.api.v1.OptionalProposalState.serializeBinaryToWriter
    );
  }
};


/**
 * optional OptionalProposalState select_in_state = 1;
 * @return {?proto.datanode.api.v1.OptionalProposalState}
 */
proto.datanode.api.v1.GetNewMarketProposalsRequest.prototype.getSelectInState = function() {
  return /** @type{?proto.datanode.api.v1.OptionalProposalState} */ (
    jspb.Message.getWrapperField(this, proto.datanode.api.v1.OptionalProposalState, 1));
};


/**
 * @param {?proto.datanode.api.v1.OptionalProposalState|undefined} value
 * @return {!proto.datanode.api.v1.GetNewMarketProposalsRequest} returns this
*/
proto.datanode.api.v1.GetNewMarketProposalsRequest.prototype.setSelectInState = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.GetNewMarketProposalsRequest} returns this
 */
proto.datanode.api.v1.GetNewMarketProposalsRequest.prototype.clearSelectInState = function() {
  return this.setSelectInState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.GetNewMarketProposalsRequest.prototype.hasSelectInState = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.GetNewMarketProposalsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetNewMarketProposalsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetNewMarketProposalsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetNewMarketProposalsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetNewMarketProposalsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    vega_governance_pb.GovernanceData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetNewMarketProposalsResponse}
 */
proto.datanode.api.v1.GetNewMarketProposalsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetNewMarketProposalsResponse;
  return proto.datanode.api.v1.GetNewMarketProposalsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetNewMarketProposalsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetNewMarketProposalsResponse}
 */
proto.datanode.api.v1.GetNewMarketProposalsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_governance_pb.GovernanceData;
      reader.readMessage(value,vega_governance_pb.GovernanceData.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetNewMarketProposalsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetNewMarketProposalsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetNewMarketProposalsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetNewMarketProposalsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_governance_pb.GovernanceData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.GovernanceData data = 1;
 * @return {!Array<!proto.vega.GovernanceData>}
 */
proto.datanode.api.v1.GetNewMarketProposalsResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.vega.GovernanceData>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_governance_pb.GovernanceData, 1));
};


/**
 * @param {!Array<!proto.vega.GovernanceData>} value
 * @return {!proto.datanode.api.v1.GetNewMarketProposalsResponse} returns this
*/
proto.datanode.api.v1.GetNewMarketProposalsResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.GovernanceData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.GovernanceData}
 */
proto.datanode.api.v1.GetNewMarketProposalsResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.GovernanceData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.GetNewMarketProposalsResponse} returns this
 */
proto.datanode.api.v1.GetNewMarketProposalsResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetUpdateMarketProposalsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetUpdateMarketProposalsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetUpdateMarketProposalsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetUpdateMarketProposalsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    selectInState: (f = msg.getSelectInState()) && proto.datanode.api.v1.OptionalProposalState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetUpdateMarketProposalsRequest}
 */
proto.datanode.api.v1.GetUpdateMarketProposalsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetUpdateMarketProposalsRequest;
  return proto.datanode.api.v1.GetUpdateMarketProposalsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetUpdateMarketProposalsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetUpdateMarketProposalsRequest}
 */
proto.datanode.api.v1.GetUpdateMarketProposalsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 2:
      var value = new proto.datanode.api.v1.OptionalProposalState;
      reader.readMessage(value,proto.datanode.api.v1.OptionalProposalState.deserializeBinaryFromReader);
      msg.setSelectInState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetUpdateMarketProposalsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetUpdateMarketProposalsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetUpdateMarketProposalsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetUpdateMarketProposalsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSelectInState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.datanode.api.v1.OptionalProposalState.serializeBinaryToWriter
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.GetUpdateMarketProposalsRequest.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.GetUpdateMarketProposalsRequest} returns this
 */
proto.datanode.api.v1.GetUpdateMarketProposalsRequest.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional OptionalProposalState select_in_state = 2;
 * @return {?proto.datanode.api.v1.OptionalProposalState}
 */
proto.datanode.api.v1.GetUpdateMarketProposalsRequest.prototype.getSelectInState = function() {
  return /** @type{?proto.datanode.api.v1.OptionalProposalState} */ (
    jspb.Message.getWrapperField(this, proto.datanode.api.v1.OptionalProposalState, 2));
};


/**
 * @param {?proto.datanode.api.v1.OptionalProposalState|undefined} value
 * @return {!proto.datanode.api.v1.GetUpdateMarketProposalsRequest} returns this
*/
proto.datanode.api.v1.GetUpdateMarketProposalsRequest.prototype.setSelectInState = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.GetUpdateMarketProposalsRequest} returns this
 */
proto.datanode.api.v1.GetUpdateMarketProposalsRequest.prototype.clearSelectInState = function() {
  return this.setSelectInState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.GetUpdateMarketProposalsRequest.prototype.hasSelectInState = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.GetUpdateMarketProposalsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetUpdateMarketProposalsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetUpdateMarketProposalsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetUpdateMarketProposalsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetUpdateMarketProposalsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    vega_governance_pb.GovernanceData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetUpdateMarketProposalsResponse}
 */
proto.datanode.api.v1.GetUpdateMarketProposalsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetUpdateMarketProposalsResponse;
  return proto.datanode.api.v1.GetUpdateMarketProposalsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetUpdateMarketProposalsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetUpdateMarketProposalsResponse}
 */
proto.datanode.api.v1.GetUpdateMarketProposalsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_governance_pb.GovernanceData;
      reader.readMessage(value,vega_governance_pb.GovernanceData.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetUpdateMarketProposalsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetUpdateMarketProposalsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetUpdateMarketProposalsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetUpdateMarketProposalsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_governance_pb.GovernanceData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.GovernanceData data = 1;
 * @return {!Array<!proto.vega.GovernanceData>}
 */
proto.datanode.api.v1.GetUpdateMarketProposalsResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.vega.GovernanceData>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_governance_pb.GovernanceData, 1));
};


/**
 * @param {!Array<!proto.vega.GovernanceData>} value
 * @return {!proto.datanode.api.v1.GetUpdateMarketProposalsResponse} returns this
*/
proto.datanode.api.v1.GetUpdateMarketProposalsResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.GovernanceData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.GovernanceData}
 */
proto.datanode.api.v1.GetUpdateMarketProposalsResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.GovernanceData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.GetUpdateMarketProposalsResponse} returns this
 */
proto.datanode.api.v1.GetUpdateMarketProposalsResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetNetworkParametersProposalsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetNetworkParametersProposalsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetNetworkParametersProposalsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetNetworkParametersProposalsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    selectInState: (f = msg.getSelectInState()) && proto.datanode.api.v1.OptionalProposalState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetNetworkParametersProposalsRequest}
 */
proto.datanode.api.v1.GetNetworkParametersProposalsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetNetworkParametersProposalsRequest;
  return proto.datanode.api.v1.GetNetworkParametersProposalsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetNetworkParametersProposalsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetNetworkParametersProposalsRequest}
 */
proto.datanode.api.v1.GetNetworkParametersProposalsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.datanode.api.v1.OptionalProposalState;
      reader.readMessage(value,proto.datanode.api.v1.OptionalProposalState.deserializeBinaryFromReader);
      msg.setSelectInState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetNetworkParametersProposalsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetNetworkParametersProposalsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetNetworkParametersProposalsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetNetworkParametersProposalsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelectInState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.datanode.api.v1.OptionalProposalState.serializeBinaryToWriter
    );
  }
};


/**
 * optional OptionalProposalState select_in_state = 1;
 * @return {?proto.datanode.api.v1.OptionalProposalState}
 */
proto.datanode.api.v1.GetNetworkParametersProposalsRequest.prototype.getSelectInState = function() {
  return /** @type{?proto.datanode.api.v1.OptionalProposalState} */ (
    jspb.Message.getWrapperField(this, proto.datanode.api.v1.OptionalProposalState, 1));
};


/**
 * @param {?proto.datanode.api.v1.OptionalProposalState|undefined} value
 * @return {!proto.datanode.api.v1.GetNetworkParametersProposalsRequest} returns this
*/
proto.datanode.api.v1.GetNetworkParametersProposalsRequest.prototype.setSelectInState = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.GetNetworkParametersProposalsRequest} returns this
 */
proto.datanode.api.v1.GetNetworkParametersProposalsRequest.prototype.clearSelectInState = function() {
  return this.setSelectInState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.GetNetworkParametersProposalsRequest.prototype.hasSelectInState = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.GetNetworkParametersProposalsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetNetworkParametersProposalsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetNetworkParametersProposalsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetNetworkParametersProposalsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetNetworkParametersProposalsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    vega_governance_pb.GovernanceData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetNetworkParametersProposalsResponse}
 */
proto.datanode.api.v1.GetNetworkParametersProposalsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetNetworkParametersProposalsResponse;
  return proto.datanode.api.v1.GetNetworkParametersProposalsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetNetworkParametersProposalsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetNetworkParametersProposalsResponse}
 */
proto.datanode.api.v1.GetNetworkParametersProposalsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_governance_pb.GovernanceData;
      reader.readMessage(value,vega_governance_pb.GovernanceData.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetNetworkParametersProposalsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetNetworkParametersProposalsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetNetworkParametersProposalsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetNetworkParametersProposalsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_governance_pb.GovernanceData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.GovernanceData data = 1;
 * @return {!Array<!proto.vega.GovernanceData>}
 */
proto.datanode.api.v1.GetNetworkParametersProposalsResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.vega.GovernanceData>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_governance_pb.GovernanceData, 1));
};


/**
 * @param {!Array<!proto.vega.GovernanceData>} value
 * @return {!proto.datanode.api.v1.GetNetworkParametersProposalsResponse} returns this
*/
proto.datanode.api.v1.GetNetworkParametersProposalsResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.GovernanceData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.GovernanceData}
 */
proto.datanode.api.v1.GetNetworkParametersProposalsResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.GovernanceData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.GetNetworkParametersProposalsResponse} returns this
 */
proto.datanode.api.v1.GetNetworkParametersProposalsResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetNewAssetProposalsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetNewAssetProposalsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetNewAssetProposalsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetNewAssetProposalsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    selectInState: (f = msg.getSelectInState()) && proto.datanode.api.v1.OptionalProposalState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetNewAssetProposalsRequest}
 */
proto.datanode.api.v1.GetNewAssetProposalsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetNewAssetProposalsRequest;
  return proto.datanode.api.v1.GetNewAssetProposalsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetNewAssetProposalsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetNewAssetProposalsRequest}
 */
proto.datanode.api.v1.GetNewAssetProposalsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.datanode.api.v1.OptionalProposalState;
      reader.readMessage(value,proto.datanode.api.v1.OptionalProposalState.deserializeBinaryFromReader);
      msg.setSelectInState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetNewAssetProposalsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetNewAssetProposalsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetNewAssetProposalsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetNewAssetProposalsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelectInState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.datanode.api.v1.OptionalProposalState.serializeBinaryToWriter
    );
  }
};


/**
 * optional OptionalProposalState select_in_state = 1;
 * @return {?proto.datanode.api.v1.OptionalProposalState}
 */
proto.datanode.api.v1.GetNewAssetProposalsRequest.prototype.getSelectInState = function() {
  return /** @type{?proto.datanode.api.v1.OptionalProposalState} */ (
    jspb.Message.getWrapperField(this, proto.datanode.api.v1.OptionalProposalState, 1));
};


/**
 * @param {?proto.datanode.api.v1.OptionalProposalState|undefined} value
 * @return {!proto.datanode.api.v1.GetNewAssetProposalsRequest} returns this
*/
proto.datanode.api.v1.GetNewAssetProposalsRequest.prototype.setSelectInState = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.GetNewAssetProposalsRequest} returns this
 */
proto.datanode.api.v1.GetNewAssetProposalsRequest.prototype.clearSelectInState = function() {
  return this.setSelectInState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.GetNewAssetProposalsRequest.prototype.hasSelectInState = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.GetNewAssetProposalsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetNewAssetProposalsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetNewAssetProposalsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetNewAssetProposalsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetNewAssetProposalsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    vega_governance_pb.GovernanceData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetNewAssetProposalsResponse}
 */
proto.datanode.api.v1.GetNewAssetProposalsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetNewAssetProposalsResponse;
  return proto.datanode.api.v1.GetNewAssetProposalsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetNewAssetProposalsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetNewAssetProposalsResponse}
 */
proto.datanode.api.v1.GetNewAssetProposalsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_governance_pb.GovernanceData;
      reader.readMessage(value,vega_governance_pb.GovernanceData.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetNewAssetProposalsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetNewAssetProposalsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetNewAssetProposalsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetNewAssetProposalsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_governance_pb.GovernanceData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.GovernanceData data = 1;
 * @return {!Array<!proto.vega.GovernanceData>}
 */
proto.datanode.api.v1.GetNewAssetProposalsResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.vega.GovernanceData>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_governance_pb.GovernanceData, 1));
};


/**
 * @param {!Array<!proto.vega.GovernanceData>} value
 * @return {!proto.datanode.api.v1.GetNewAssetProposalsResponse} returns this
*/
proto.datanode.api.v1.GetNewAssetProposalsResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.GovernanceData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.GovernanceData}
 */
proto.datanode.api.v1.GetNewAssetProposalsResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.GovernanceData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.GetNewAssetProposalsResponse} returns this
 */
proto.datanode.api.v1.GetNewAssetProposalsResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetProposalByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetProposalByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetProposalByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetProposalByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    proposalId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetProposalByIDRequest}
 */
proto.datanode.api.v1.GetProposalByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetProposalByIDRequest;
  return proto.datanode.api.v1.GetProposalByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetProposalByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetProposalByIDRequest}
 */
proto.datanode.api.v1.GetProposalByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProposalId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetProposalByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetProposalByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetProposalByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetProposalByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProposalId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string proposal_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.GetProposalByIDRequest.prototype.getProposalId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.GetProposalByIDRequest} returns this
 */
proto.datanode.api.v1.GetProposalByIDRequest.prototype.setProposalId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetProposalByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetProposalByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetProposalByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetProposalByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && vega_governance_pb.GovernanceData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetProposalByIDResponse}
 */
proto.datanode.api.v1.GetProposalByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetProposalByIDResponse;
  return proto.datanode.api.v1.GetProposalByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetProposalByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetProposalByIDResponse}
 */
proto.datanode.api.v1.GetProposalByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_governance_pb.GovernanceData;
      reader.readMessage(value,vega_governance_pb.GovernanceData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetProposalByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetProposalByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetProposalByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetProposalByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_governance_pb.GovernanceData.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.GovernanceData data = 1;
 * @return {?proto.vega.GovernanceData}
 */
proto.datanode.api.v1.GetProposalByIDResponse.prototype.getData = function() {
  return /** @type{?proto.vega.GovernanceData} */ (
    jspb.Message.getWrapperField(this, vega_governance_pb.GovernanceData, 1));
};


/**
 * @param {?proto.vega.GovernanceData|undefined} value
 * @return {!proto.datanode.api.v1.GetProposalByIDResponse} returns this
*/
proto.datanode.api.v1.GetProposalByIDResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.GetProposalByIDResponse} returns this
 */
proto.datanode.api.v1.GetProposalByIDResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.GetProposalByIDResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetProposalByReferenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetProposalByReferenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetProposalByReferenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetProposalByReferenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    reference: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetProposalByReferenceRequest}
 */
proto.datanode.api.v1.GetProposalByReferenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetProposalByReferenceRequest;
  return proto.datanode.api.v1.GetProposalByReferenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetProposalByReferenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetProposalByReferenceRequest}
 */
proto.datanode.api.v1.GetProposalByReferenceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReference(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetProposalByReferenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetProposalByReferenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetProposalByReferenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetProposalByReferenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReference();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string reference = 1;
 * @return {string}
 */
proto.datanode.api.v1.GetProposalByReferenceRequest.prototype.getReference = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.GetProposalByReferenceRequest} returns this
 */
proto.datanode.api.v1.GetProposalByReferenceRequest.prototype.setReference = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetProposalByReferenceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetProposalByReferenceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetProposalByReferenceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetProposalByReferenceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && vega_governance_pb.GovernanceData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetProposalByReferenceResponse}
 */
proto.datanode.api.v1.GetProposalByReferenceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetProposalByReferenceResponse;
  return proto.datanode.api.v1.GetProposalByReferenceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetProposalByReferenceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetProposalByReferenceResponse}
 */
proto.datanode.api.v1.GetProposalByReferenceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_governance_pb.GovernanceData;
      reader.readMessage(value,vega_governance_pb.GovernanceData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetProposalByReferenceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetProposalByReferenceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetProposalByReferenceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetProposalByReferenceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_governance_pb.GovernanceData.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.GovernanceData data = 1;
 * @return {?proto.vega.GovernanceData}
 */
proto.datanode.api.v1.GetProposalByReferenceResponse.prototype.getData = function() {
  return /** @type{?proto.vega.GovernanceData} */ (
    jspb.Message.getWrapperField(this, vega_governance_pb.GovernanceData, 1));
};


/**
 * @param {?proto.vega.GovernanceData|undefined} value
 * @return {!proto.datanode.api.v1.GetProposalByReferenceResponse} returns this
*/
proto.datanode.api.v1.GetProposalByReferenceResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.GetProposalByReferenceResponse} returns this
 */
proto.datanode.api.v1.GetProposalByReferenceResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.GetProposalByReferenceResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.ObserveGovernanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.ObserveGovernanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.ObserveGovernanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.ObserveGovernanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.ObserveGovernanceRequest}
 */
proto.datanode.api.v1.ObserveGovernanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.ObserveGovernanceRequest;
  return proto.datanode.api.v1.ObserveGovernanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.ObserveGovernanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.ObserveGovernanceRequest}
 */
proto.datanode.api.v1.ObserveGovernanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.ObserveGovernanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.ObserveGovernanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.ObserveGovernanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.ObserveGovernanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.ObserveGovernanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.ObserveGovernanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.ObserveGovernanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.ObserveGovernanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && vega_governance_pb.GovernanceData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.ObserveGovernanceResponse}
 */
proto.datanode.api.v1.ObserveGovernanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.ObserveGovernanceResponse;
  return proto.datanode.api.v1.ObserveGovernanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.ObserveGovernanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.ObserveGovernanceResponse}
 */
proto.datanode.api.v1.ObserveGovernanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_governance_pb.GovernanceData;
      reader.readMessage(value,vega_governance_pb.GovernanceData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.ObserveGovernanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.ObserveGovernanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.ObserveGovernanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.ObserveGovernanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_governance_pb.GovernanceData.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.GovernanceData data = 1;
 * @return {?proto.vega.GovernanceData}
 */
proto.datanode.api.v1.ObserveGovernanceResponse.prototype.getData = function() {
  return /** @type{?proto.vega.GovernanceData} */ (
    jspb.Message.getWrapperField(this, vega_governance_pb.GovernanceData, 1));
};


/**
 * @param {?proto.vega.GovernanceData|undefined} value
 * @return {!proto.datanode.api.v1.ObserveGovernanceResponse} returns this
*/
proto.datanode.api.v1.ObserveGovernanceResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.ObserveGovernanceResponse} returns this
 */
proto.datanode.api.v1.ObserveGovernanceResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.ObserveGovernanceResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.ObservePartyProposalsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.ObservePartyProposalsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.ObservePartyProposalsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.ObservePartyProposalsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.ObservePartyProposalsRequest}
 */
proto.datanode.api.v1.ObservePartyProposalsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.ObservePartyProposalsRequest;
  return proto.datanode.api.v1.ObservePartyProposalsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.ObservePartyProposalsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.ObservePartyProposalsRequest}
 */
proto.datanode.api.v1.ObservePartyProposalsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.ObservePartyProposalsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.ObservePartyProposalsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.ObservePartyProposalsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.ObservePartyProposalsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string party_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.ObservePartyProposalsRequest.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.ObservePartyProposalsRequest} returns this
 */
proto.datanode.api.v1.ObservePartyProposalsRequest.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.ObservePartyProposalsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.ObservePartyProposalsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.ObservePartyProposalsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.ObservePartyProposalsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && vega_governance_pb.GovernanceData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.ObservePartyProposalsResponse}
 */
proto.datanode.api.v1.ObservePartyProposalsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.ObservePartyProposalsResponse;
  return proto.datanode.api.v1.ObservePartyProposalsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.ObservePartyProposalsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.ObservePartyProposalsResponse}
 */
proto.datanode.api.v1.ObservePartyProposalsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_governance_pb.GovernanceData;
      reader.readMessage(value,vega_governance_pb.GovernanceData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.ObservePartyProposalsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.ObservePartyProposalsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.ObservePartyProposalsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.ObservePartyProposalsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_governance_pb.GovernanceData.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.GovernanceData data = 1;
 * @return {?proto.vega.GovernanceData}
 */
proto.datanode.api.v1.ObservePartyProposalsResponse.prototype.getData = function() {
  return /** @type{?proto.vega.GovernanceData} */ (
    jspb.Message.getWrapperField(this, vega_governance_pb.GovernanceData, 1));
};


/**
 * @param {?proto.vega.GovernanceData|undefined} value
 * @return {!proto.datanode.api.v1.ObservePartyProposalsResponse} returns this
*/
proto.datanode.api.v1.ObservePartyProposalsResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.ObservePartyProposalsResponse} returns this
 */
proto.datanode.api.v1.ObservePartyProposalsResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.ObservePartyProposalsResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.ObserveProposalVotesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.ObserveProposalVotesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.ObserveProposalVotesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.ObserveProposalVotesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    proposalId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.ObserveProposalVotesRequest}
 */
proto.datanode.api.v1.ObserveProposalVotesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.ObserveProposalVotesRequest;
  return proto.datanode.api.v1.ObserveProposalVotesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.ObserveProposalVotesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.ObserveProposalVotesRequest}
 */
proto.datanode.api.v1.ObserveProposalVotesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProposalId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.ObserveProposalVotesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.ObserveProposalVotesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.ObserveProposalVotesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.ObserveProposalVotesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProposalId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string proposal_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.ObserveProposalVotesRequest.prototype.getProposalId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.ObserveProposalVotesRequest} returns this
 */
proto.datanode.api.v1.ObserveProposalVotesRequest.prototype.setProposalId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.ObserveProposalVotesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.ObserveProposalVotesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.ObserveProposalVotesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.ObserveProposalVotesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    vote: (f = msg.getVote()) && vega_governance_pb.Vote.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.ObserveProposalVotesResponse}
 */
proto.datanode.api.v1.ObserveProposalVotesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.ObserveProposalVotesResponse;
  return proto.datanode.api.v1.ObserveProposalVotesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.ObserveProposalVotesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.ObserveProposalVotesResponse}
 */
proto.datanode.api.v1.ObserveProposalVotesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_governance_pb.Vote;
      reader.readMessage(value,vega_governance_pb.Vote.deserializeBinaryFromReader);
      msg.setVote(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.ObserveProposalVotesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.ObserveProposalVotesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.ObserveProposalVotesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.ObserveProposalVotesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVote();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_governance_pb.Vote.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.Vote vote = 1;
 * @return {?proto.vega.Vote}
 */
proto.datanode.api.v1.ObserveProposalVotesResponse.prototype.getVote = function() {
  return /** @type{?proto.vega.Vote} */ (
    jspb.Message.getWrapperField(this, vega_governance_pb.Vote, 1));
};


/**
 * @param {?proto.vega.Vote|undefined} value
 * @return {!proto.datanode.api.v1.ObserveProposalVotesResponse} returns this
*/
proto.datanode.api.v1.ObserveProposalVotesResponse.prototype.setVote = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.ObserveProposalVotesResponse} returns this
 */
proto.datanode.api.v1.ObserveProposalVotesResponse.prototype.clearVote = function() {
  return this.setVote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.ObserveProposalVotesResponse.prototype.hasVote = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.ObservePartyVotesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.ObservePartyVotesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.ObservePartyVotesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.ObservePartyVotesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.ObservePartyVotesRequest}
 */
proto.datanode.api.v1.ObservePartyVotesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.ObservePartyVotesRequest;
  return proto.datanode.api.v1.ObservePartyVotesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.ObservePartyVotesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.ObservePartyVotesRequest}
 */
proto.datanode.api.v1.ObservePartyVotesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.ObservePartyVotesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.ObservePartyVotesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.ObservePartyVotesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.ObservePartyVotesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string party_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.ObservePartyVotesRequest.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.ObservePartyVotesRequest} returns this
 */
proto.datanode.api.v1.ObservePartyVotesRequest.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.ObservePartyVotesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.ObservePartyVotesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.ObservePartyVotesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.ObservePartyVotesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    vote: (f = msg.getVote()) && vega_governance_pb.Vote.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.ObservePartyVotesResponse}
 */
proto.datanode.api.v1.ObservePartyVotesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.ObservePartyVotesResponse;
  return proto.datanode.api.v1.ObservePartyVotesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.ObservePartyVotesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.ObservePartyVotesResponse}
 */
proto.datanode.api.v1.ObservePartyVotesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_governance_pb.Vote;
      reader.readMessage(value,vega_governance_pb.Vote.deserializeBinaryFromReader);
      msg.setVote(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.ObservePartyVotesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.ObservePartyVotesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.ObservePartyVotesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.ObservePartyVotesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVote();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_governance_pb.Vote.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.Vote vote = 1;
 * @return {?proto.vega.Vote}
 */
proto.datanode.api.v1.ObservePartyVotesResponse.prototype.getVote = function() {
  return /** @type{?proto.vega.Vote} */ (
    jspb.Message.getWrapperField(this, vega_governance_pb.Vote, 1));
};


/**
 * @param {?proto.vega.Vote|undefined} value
 * @return {!proto.datanode.api.v1.ObservePartyVotesResponse} returns this
*/
proto.datanode.api.v1.ObservePartyVotesResponse.prototype.setVote = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.ObservePartyVotesResponse} returns this
 */
proto.datanode.api.v1.ObservePartyVotesResponse.prototype.clearVote = function() {
  return this.setVote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.ObservePartyVotesResponse.prototype.hasVote = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.MarginLevelsSubscribeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.MarginLevelsSubscribeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.MarginLevelsSubscribeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarginLevelsSubscribeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    marketId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.MarginLevelsSubscribeRequest}
 */
proto.datanode.api.v1.MarginLevelsSubscribeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.MarginLevelsSubscribeRequest;
  return proto.datanode.api.v1.MarginLevelsSubscribeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.MarginLevelsSubscribeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.MarginLevelsSubscribeRequest}
 */
proto.datanode.api.v1.MarginLevelsSubscribeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.MarginLevelsSubscribeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.MarginLevelsSubscribeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.MarginLevelsSubscribeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarginLevelsSubscribeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string party_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.MarginLevelsSubscribeRequest.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.MarginLevelsSubscribeRequest} returns this
 */
proto.datanode.api.v1.MarginLevelsSubscribeRequest.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string market_id = 2;
 * @return {string}
 */
proto.datanode.api.v1.MarginLevelsSubscribeRequest.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.MarginLevelsSubscribeRequest} returns this
 */
proto.datanode.api.v1.MarginLevelsSubscribeRequest.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.MarginLevelsSubscribeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.MarginLevelsSubscribeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.MarginLevelsSubscribeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarginLevelsSubscribeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    marginLevels: (f = msg.getMarginLevels()) && vega_vega_pb.MarginLevels.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.MarginLevelsSubscribeResponse}
 */
proto.datanode.api.v1.MarginLevelsSubscribeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.MarginLevelsSubscribeResponse;
  return proto.datanode.api.v1.MarginLevelsSubscribeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.MarginLevelsSubscribeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.MarginLevelsSubscribeResponse}
 */
proto.datanode.api.v1.MarginLevelsSubscribeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.MarginLevels;
      reader.readMessage(value,vega_vega_pb.MarginLevels.deserializeBinaryFromReader);
      msg.setMarginLevels(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.MarginLevelsSubscribeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.MarginLevelsSubscribeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.MarginLevelsSubscribeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarginLevelsSubscribeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarginLevels();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_vega_pb.MarginLevels.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.MarginLevels margin_levels = 1;
 * @return {?proto.vega.MarginLevels}
 */
proto.datanode.api.v1.MarginLevelsSubscribeResponse.prototype.getMarginLevels = function() {
  return /** @type{?proto.vega.MarginLevels} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.MarginLevels, 1));
};


/**
 * @param {?proto.vega.MarginLevels|undefined} value
 * @return {!proto.datanode.api.v1.MarginLevelsSubscribeResponse} returns this
*/
proto.datanode.api.v1.MarginLevelsSubscribeResponse.prototype.setMarginLevels = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.MarginLevelsSubscribeResponse} returns this
 */
proto.datanode.api.v1.MarginLevelsSubscribeResponse.prototype.clearMarginLevels = function() {
  return this.setMarginLevels(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.MarginLevelsSubscribeResponse.prototype.hasMarginLevels = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.MarginLevelsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.MarginLevelsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.MarginLevelsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarginLevelsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    marketId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.MarginLevelsRequest}
 */
proto.datanode.api.v1.MarginLevelsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.MarginLevelsRequest;
  return proto.datanode.api.v1.MarginLevelsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.MarginLevelsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.MarginLevelsRequest}
 */
proto.datanode.api.v1.MarginLevelsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.MarginLevelsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.MarginLevelsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.MarginLevelsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarginLevelsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string party_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.MarginLevelsRequest.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.MarginLevelsRequest} returns this
 */
proto.datanode.api.v1.MarginLevelsRequest.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string market_id = 2;
 * @return {string}
 */
proto.datanode.api.v1.MarginLevelsRequest.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.MarginLevelsRequest} returns this
 */
proto.datanode.api.v1.MarginLevelsRequest.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.MarginLevelsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.MarginLevelsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.MarginLevelsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.MarginLevelsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarginLevelsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    marginLevelsList: jspb.Message.toObjectList(msg.getMarginLevelsList(),
    vega_vega_pb.MarginLevels.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.MarginLevelsResponse}
 */
proto.datanode.api.v1.MarginLevelsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.MarginLevelsResponse;
  return proto.datanode.api.v1.MarginLevelsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.MarginLevelsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.MarginLevelsResponse}
 */
proto.datanode.api.v1.MarginLevelsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.MarginLevels;
      reader.readMessage(value,vega_vega_pb.MarginLevels.deserializeBinaryFromReader);
      msg.addMarginLevels(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.MarginLevelsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.MarginLevelsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.MarginLevelsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarginLevelsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarginLevelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_vega_pb.MarginLevels.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.MarginLevels margin_levels = 1;
 * @return {!Array<!proto.vega.MarginLevels>}
 */
proto.datanode.api.v1.MarginLevelsResponse.prototype.getMarginLevelsList = function() {
  return /** @type{!Array<!proto.vega.MarginLevels>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.MarginLevels, 1));
};


/**
 * @param {!Array<!proto.vega.MarginLevels>} value
 * @return {!proto.datanode.api.v1.MarginLevelsResponse} returns this
*/
proto.datanode.api.v1.MarginLevelsResponse.prototype.setMarginLevelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.MarginLevels=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.MarginLevels}
 */
proto.datanode.api.v1.MarginLevelsResponse.prototype.addMarginLevels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.MarginLevels, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.MarginLevelsResponse} returns this
 */
proto.datanode.api.v1.MarginLevelsResponse.prototype.clearMarginLevelsList = function() {
  return this.setMarginLevelsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.MarketsDataSubscribeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.MarketsDataSubscribeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.MarketsDataSubscribeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketsDataSubscribeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.MarketsDataSubscribeRequest}
 */
proto.datanode.api.v1.MarketsDataSubscribeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.MarketsDataSubscribeRequest;
  return proto.datanode.api.v1.MarketsDataSubscribeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.MarketsDataSubscribeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.MarketsDataSubscribeRequest}
 */
proto.datanode.api.v1.MarketsDataSubscribeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.MarketsDataSubscribeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.MarketsDataSubscribeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.MarketsDataSubscribeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketsDataSubscribeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.MarketsDataSubscribeRequest.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.MarketsDataSubscribeRequest} returns this
 */
proto.datanode.api.v1.MarketsDataSubscribeRequest.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.MarketsDataSubscribeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.MarketsDataSubscribeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.MarketsDataSubscribeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketsDataSubscribeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketData: (f = msg.getMarketData()) && vega_vega_pb.MarketData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.MarketsDataSubscribeResponse}
 */
proto.datanode.api.v1.MarketsDataSubscribeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.MarketsDataSubscribeResponse;
  return proto.datanode.api.v1.MarketsDataSubscribeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.MarketsDataSubscribeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.MarketsDataSubscribeResponse}
 */
proto.datanode.api.v1.MarketsDataSubscribeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.MarketData;
      reader.readMessage(value,vega_vega_pb.MarketData.deserializeBinaryFromReader);
      msg.setMarketData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.MarketsDataSubscribeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.MarketsDataSubscribeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.MarketsDataSubscribeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketsDataSubscribeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_vega_pb.MarketData.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.MarketData market_data = 1;
 * @return {?proto.vega.MarketData}
 */
proto.datanode.api.v1.MarketsDataSubscribeResponse.prototype.getMarketData = function() {
  return /** @type{?proto.vega.MarketData} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.MarketData, 1));
};


/**
 * @param {?proto.vega.MarketData|undefined} value
 * @return {!proto.datanode.api.v1.MarketsDataSubscribeResponse} returns this
*/
proto.datanode.api.v1.MarketsDataSubscribeResponse.prototype.setMarketData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.MarketsDataSubscribeResponse} returns this
 */
proto.datanode.api.v1.MarketsDataSubscribeResponse.prototype.clearMarketData = function() {
  return this.setMarketData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.MarketsDataSubscribeResponse.prototype.hasMarketData = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.MarketDataByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.MarketDataByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.MarketDataByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketDataByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.MarketDataByIDRequest}
 */
proto.datanode.api.v1.MarketDataByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.MarketDataByIDRequest;
  return proto.datanode.api.v1.MarketDataByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.MarketDataByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.MarketDataByIDRequest}
 */
proto.datanode.api.v1.MarketDataByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.MarketDataByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.MarketDataByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.MarketDataByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketDataByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.MarketDataByIDRequest.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.MarketDataByIDRequest} returns this
 */
proto.datanode.api.v1.MarketDataByIDRequest.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.MarketDataByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.MarketDataByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.MarketDataByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketDataByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketData: (f = msg.getMarketData()) && vega_vega_pb.MarketData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.MarketDataByIDResponse}
 */
proto.datanode.api.v1.MarketDataByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.MarketDataByIDResponse;
  return proto.datanode.api.v1.MarketDataByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.MarketDataByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.MarketDataByIDResponse}
 */
proto.datanode.api.v1.MarketDataByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.MarketData;
      reader.readMessage(value,vega_vega_pb.MarketData.deserializeBinaryFromReader);
      msg.setMarketData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.MarketDataByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.MarketDataByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.MarketDataByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketDataByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_vega_pb.MarketData.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.MarketData market_data = 1;
 * @return {?proto.vega.MarketData}
 */
proto.datanode.api.v1.MarketDataByIDResponse.prototype.getMarketData = function() {
  return /** @type{?proto.vega.MarketData} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.MarketData, 1));
};


/**
 * @param {?proto.vega.MarketData|undefined} value
 * @return {!proto.datanode.api.v1.MarketDataByIDResponse} returns this
*/
proto.datanode.api.v1.MarketDataByIDResponse.prototype.setMarketData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.MarketDataByIDResponse} returns this
 */
proto.datanode.api.v1.MarketDataByIDResponse.prototype.clearMarketData = function() {
  return this.setMarketData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.MarketDataByIDResponse.prototype.hasMarketData = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.MarketsDataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.MarketsDataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.MarketsDataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketsDataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.MarketsDataRequest}
 */
proto.datanode.api.v1.MarketsDataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.MarketsDataRequest;
  return proto.datanode.api.v1.MarketsDataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.MarketsDataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.MarketsDataRequest}
 */
proto.datanode.api.v1.MarketsDataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.MarketsDataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.MarketsDataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.MarketsDataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketsDataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.MarketsDataResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.MarketsDataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.MarketsDataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.MarketsDataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketsDataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketsDataList: jspb.Message.toObjectList(msg.getMarketsDataList(),
    vega_vega_pb.MarketData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.MarketsDataResponse}
 */
proto.datanode.api.v1.MarketsDataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.MarketsDataResponse;
  return proto.datanode.api.v1.MarketsDataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.MarketsDataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.MarketsDataResponse}
 */
proto.datanode.api.v1.MarketsDataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.MarketData;
      reader.readMessage(value,vega_vega_pb.MarketData.deserializeBinaryFromReader);
      msg.addMarketsData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.MarketsDataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.MarketsDataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.MarketsDataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketsDataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketsDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_vega_pb.MarketData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.MarketData markets_data = 1;
 * @return {!Array<!proto.vega.MarketData>}
 */
proto.datanode.api.v1.MarketsDataResponse.prototype.getMarketsDataList = function() {
  return /** @type{!Array<!proto.vega.MarketData>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.MarketData, 1));
};


/**
 * @param {!Array<!proto.vega.MarketData>} value
 * @return {!proto.datanode.api.v1.MarketsDataResponse} returns this
*/
proto.datanode.api.v1.MarketsDataResponse.prototype.setMarketsDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.MarketData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.MarketData}
 */
proto.datanode.api.v1.MarketsDataResponse.prototype.addMarketsData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.MarketData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.MarketsDataResponse} returns this
 */
proto.datanode.api.v1.MarketsDataResponse.prototype.clearMarketsDataList = function() {
  return this.setMarketsDataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.LastTradeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.LastTradeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.LastTradeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.LastTradeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.LastTradeRequest}
 */
proto.datanode.api.v1.LastTradeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.LastTradeRequest;
  return proto.datanode.api.v1.LastTradeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.LastTradeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.LastTradeRequest}
 */
proto.datanode.api.v1.LastTradeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.LastTradeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.LastTradeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.LastTradeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.LastTradeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.LastTradeRequest.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.LastTradeRequest} returns this
 */
proto.datanode.api.v1.LastTradeRequest.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.LastTradeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.LastTradeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.LastTradeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.LastTradeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    trade: (f = msg.getTrade()) && vega_vega_pb.Trade.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.LastTradeResponse}
 */
proto.datanode.api.v1.LastTradeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.LastTradeResponse;
  return proto.datanode.api.v1.LastTradeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.LastTradeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.LastTradeResponse}
 */
proto.datanode.api.v1.LastTradeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Trade;
      reader.readMessage(value,vega_vega_pb.Trade.deserializeBinaryFromReader);
      msg.setTrade(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.LastTradeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.LastTradeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.LastTradeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.LastTradeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrade();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_vega_pb.Trade.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.Trade trade = 1;
 * @return {?proto.vega.Trade}
 */
proto.datanode.api.v1.LastTradeResponse.prototype.getTrade = function() {
  return /** @type{?proto.vega.Trade} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.Trade, 1));
};


/**
 * @param {?proto.vega.Trade|undefined} value
 * @return {!proto.datanode.api.v1.LastTradeResponse} returns this
*/
proto.datanode.api.v1.LastTradeResponse.prototype.setTrade = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.LastTradeResponse} returns this
 */
proto.datanode.api.v1.LastTradeResponse.prototype.clearTrade = function() {
  return this.setTrade(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.LastTradeResponse.prototype.hasTrade = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.MarketByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.MarketByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.MarketByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.MarketByIDRequest}
 */
proto.datanode.api.v1.MarketByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.MarketByIDRequest;
  return proto.datanode.api.v1.MarketByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.MarketByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.MarketByIDRequest}
 */
proto.datanode.api.v1.MarketByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.MarketByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.MarketByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.MarketByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.MarketByIDRequest.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.MarketByIDRequest} returns this
 */
proto.datanode.api.v1.MarketByIDRequest.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.MarketByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.MarketByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.MarketByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && vega_markets_pb.Market.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.MarketByIDResponse}
 */
proto.datanode.api.v1.MarketByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.MarketByIDResponse;
  return proto.datanode.api.v1.MarketByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.MarketByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.MarketByIDResponse}
 */
proto.datanode.api.v1.MarketByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_markets_pb.Market;
      reader.readMessage(value,vega_markets_pb.Market.deserializeBinaryFromReader);
      msg.setMarket(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.MarketByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.MarketByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.MarketByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_markets_pb.Market.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.Market market = 1;
 * @return {?proto.vega.Market}
 */
proto.datanode.api.v1.MarketByIDResponse.prototype.getMarket = function() {
  return /** @type{?proto.vega.Market} */ (
    jspb.Message.getWrapperField(this, vega_markets_pb.Market, 1));
};


/**
 * @param {?proto.vega.Market|undefined} value
 * @return {!proto.datanode.api.v1.MarketByIDResponse} returns this
*/
proto.datanode.api.v1.MarketByIDResponse.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.MarketByIDResponse} returns this
 */
proto.datanode.api.v1.MarketByIDResponse.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.MarketByIDResponse.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.PartyByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.PartyByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.PartyByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.PartyByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.PartyByIDRequest}
 */
proto.datanode.api.v1.PartyByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.PartyByIDRequest;
  return proto.datanode.api.v1.PartyByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.PartyByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.PartyByIDRequest}
 */
proto.datanode.api.v1.PartyByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.PartyByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.PartyByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.PartyByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.PartyByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string party_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.PartyByIDRequest.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.PartyByIDRequest} returns this
 */
proto.datanode.api.v1.PartyByIDRequest.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.PartyByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.PartyByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.PartyByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.PartyByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    party: (f = msg.getParty()) && vega_vega_pb.Party.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.PartyByIDResponse}
 */
proto.datanode.api.v1.PartyByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.PartyByIDResponse;
  return proto.datanode.api.v1.PartyByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.PartyByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.PartyByIDResponse}
 */
proto.datanode.api.v1.PartyByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Party;
      reader.readMessage(value,vega_vega_pb.Party.deserializeBinaryFromReader);
      msg.setParty(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.PartyByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.PartyByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.PartyByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.PartyByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParty();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_vega_pb.Party.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.Party party = 1;
 * @return {?proto.vega.Party}
 */
proto.datanode.api.v1.PartyByIDResponse.prototype.getParty = function() {
  return /** @type{?proto.vega.Party} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.Party, 1));
};


/**
 * @param {?proto.vega.Party|undefined} value
 * @return {!proto.datanode.api.v1.PartyByIDResponse} returns this
*/
proto.datanode.api.v1.PartyByIDResponse.prototype.setParty = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.PartyByIDResponse} returns this
 */
proto.datanode.api.v1.PartyByIDResponse.prototype.clearParty = function() {
  return this.setParty(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.PartyByIDResponse.prototype.hasParty = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.PartiesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.PartiesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.PartiesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.PartiesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.PartiesRequest}
 */
proto.datanode.api.v1.PartiesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.PartiesRequest;
  return proto.datanode.api.v1.PartiesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.PartiesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.PartiesRequest}
 */
proto.datanode.api.v1.PartiesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.PartiesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.PartiesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.PartiesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.PartiesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.PartiesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.PartiesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.PartiesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.PartiesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.PartiesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    partiesList: jspb.Message.toObjectList(msg.getPartiesList(),
    vega_vega_pb.Party.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.PartiesResponse}
 */
proto.datanode.api.v1.PartiesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.PartiesResponse;
  return proto.datanode.api.v1.PartiesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.PartiesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.PartiesResponse}
 */
proto.datanode.api.v1.PartiesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Party;
      reader.readMessage(value,vega_vega_pb.Party.deserializeBinaryFromReader);
      msg.addParties(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.PartiesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.PartiesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.PartiesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.PartiesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_vega_pb.Party.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Party parties = 1;
 * @return {!Array<!proto.vega.Party>}
 */
proto.datanode.api.v1.PartiesResponse.prototype.getPartiesList = function() {
  return /** @type{!Array<!proto.vega.Party>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.Party, 1));
};


/**
 * @param {!Array<!proto.vega.Party>} value
 * @return {!proto.datanode.api.v1.PartiesResponse} returns this
*/
proto.datanode.api.v1.PartiesResponse.prototype.setPartiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Party=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Party}
 */
proto.datanode.api.v1.PartiesResponse.prototype.addParties = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Party, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.PartiesResponse} returns this
 */
proto.datanode.api.v1.PartiesResponse.prototype.clearPartiesList = function() {
  return this.setPartiesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.TradesByPartyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.TradesByPartyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.TradesByPartyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.TradesByPartyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    marketId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pagination: (f = msg.getPagination()) && proto.datanode.api.v1.Pagination.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.TradesByPartyRequest}
 */
proto.datanode.api.v1.TradesByPartyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.TradesByPartyRequest;
  return proto.datanode.api.v1.TradesByPartyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.TradesByPartyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.TradesByPartyRequest}
 */
proto.datanode.api.v1.TradesByPartyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 3:
      var value = new proto.datanode.api.v1.Pagination;
      reader.readMessage(value,proto.datanode.api.v1.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.TradesByPartyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.TradesByPartyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.TradesByPartyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.TradesByPartyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.datanode.api.v1.Pagination.serializeBinaryToWriter
    );
  }
};


/**
 * optional string party_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.TradesByPartyRequest.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.TradesByPartyRequest} returns this
 */
proto.datanode.api.v1.TradesByPartyRequest.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string market_id = 2;
 * @return {string}
 */
proto.datanode.api.v1.TradesByPartyRequest.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.TradesByPartyRequest} returns this
 */
proto.datanode.api.v1.TradesByPartyRequest.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Pagination pagination = 3;
 * @return {?proto.datanode.api.v1.Pagination}
 */
proto.datanode.api.v1.TradesByPartyRequest.prototype.getPagination = function() {
  return /** @type{?proto.datanode.api.v1.Pagination} */ (
    jspb.Message.getWrapperField(this, proto.datanode.api.v1.Pagination, 3));
};


/**
 * @param {?proto.datanode.api.v1.Pagination|undefined} value
 * @return {!proto.datanode.api.v1.TradesByPartyRequest} returns this
*/
proto.datanode.api.v1.TradesByPartyRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.TradesByPartyRequest} returns this
 */
proto.datanode.api.v1.TradesByPartyRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.TradesByPartyRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.TradesByPartyResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.TradesByPartyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.TradesByPartyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.TradesByPartyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.TradesByPartyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradesList: jspb.Message.toObjectList(msg.getTradesList(),
    vega_vega_pb.Trade.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.TradesByPartyResponse}
 */
proto.datanode.api.v1.TradesByPartyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.TradesByPartyResponse;
  return proto.datanode.api.v1.TradesByPartyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.TradesByPartyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.TradesByPartyResponse}
 */
proto.datanode.api.v1.TradesByPartyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Trade;
      reader.readMessage(value,vega_vega_pb.Trade.deserializeBinaryFromReader);
      msg.addTrades(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.TradesByPartyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.TradesByPartyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.TradesByPartyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.TradesByPartyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_vega_pb.Trade.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Trade trades = 1;
 * @return {!Array<!proto.vega.Trade>}
 */
proto.datanode.api.v1.TradesByPartyResponse.prototype.getTradesList = function() {
  return /** @type{!Array<!proto.vega.Trade>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.Trade, 1));
};


/**
 * @param {!Array<!proto.vega.Trade>} value
 * @return {!proto.datanode.api.v1.TradesByPartyResponse} returns this
*/
proto.datanode.api.v1.TradesByPartyResponse.prototype.setTradesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Trade=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Trade}
 */
proto.datanode.api.v1.TradesByPartyResponse.prototype.addTrades = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Trade, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.TradesByPartyResponse} returns this
 */
proto.datanode.api.v1.TradesByPartyResponse.prototype.clearTradesList = function() {
  return this.setTradesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.TradesByOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.TradesByOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.TradesByOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.TradesByOrderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.TradesByOrderRequest}
 */
proto.datanode.api.v1.TradesByOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.TradesByOrderRequest;
  return proto.datanode.api.v1.TradesByOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.TradesByOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.TradesByOrderRequest}
 */
proto.datanode.api.v1.TradesByOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.TradesByOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.TradesByOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.TradesByOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.TradesByOrderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string order_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.TradesByOrderRequest.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.TradesByOrderRequest} returns this
 */
proto.datanode.api.v1.TradesByOrderRequest.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.TradesByOrderResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.TradesByOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.TradesByOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.TradesByOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.TradesByOrderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradesList: jspb.Message.toObjectList(msg.getTradesList(),
    vega_vega_pb.Trade.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.TradesByOrderResponse}
 */
proto.datanode.api.v1.TradesByOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.TradesByOrderResponse;
  return proto.datanode.api.v1.TradesByOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.TradesByOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.TradesByOrderResponse}
 */
proto.datanode.api.v1.TradesByOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Trade;
      reader.readMessage(value,vega_vega_pb.Trade.deserializeBinaryFromReader);
      msg.addTrades(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.TradesByOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.TradesByOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.TradesByOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.TradesByOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_vega_pb.Trade.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Trade trades = 1;
 * @return {!Array<!proto.vega.Trade>}
 */
proto.datanode.api.v1.TradesByOrderResponse.prototype.getTradesList = function() {
  return /** @type{!Array<!proto.vega.Trade>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.Trade, 1));
};


/**
 * @param {!Array<!proto.vega.Trade>} value
 * @return {!proto.datanode.api.v1.TradesByOrderResponse} returns this
*/
proto.datanode.api.v1.TradesByOrderResponse.prototype.setTradesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Trade=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Trade}
 */
proto.datanode.api.v1.TradesByOrderResponse.prototype.addTrades = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Trade, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.TradesByOrderResponse} returns this
 */
proto.datanode.api.v1.TradesByOrderResponse.prototype.clearTradesList = function() {
  return this.setTradesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.AccountsSubscribeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.AccountsSubscribeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.AccountsSubscribeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.AccountsSubscribeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    partyId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    asset: jspb.Message.getFieldWithDefault(msg, 3, ""),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.AccountsSubscribeRequest}
 */
proto.datanode.api.v1.AccountsSubscribeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.AccountsSubscribeRequest;
  return proto.datanode.api.v1.AccountsSubscribeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.AccountsSubscribeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.AccountsSubscribeRequest}
 */
proto.datanode.api.v1.AccountsSubscribeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsset(value);
      break;
    case 4:
      var value = /** @type {!proto.vega.AccountType} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.AccountsSubscribeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.AccountsSubscribeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.AccountsSubscribeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.AccountsSubscribeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPartyId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAsset();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.AccountsSubscribeRequest.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.AccountsSubscribeRequest} returns this
 */
proto.datanode.api.v1.AccountsSubscribeRequest.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string party_id = 2;
 * @return {string}
 */
proto.datanode.api.v1.AccountsSubscribeRequest.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.AccountsSubscribeRequest} returns this
 */
proto.datanode.api.v1.AccountsSubscribeRequest.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string asset = 3;
 * @return {string}
 */
proto.datanode.api.v1.AccountsSubscribeRequest.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.AccountsSubscribeRequest} returns this
 */
proto.datanode.api.v1.AccountsSubscribeRequest.prototype.setAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional vega.AccountType type = 4;
 * @return {!proto.vega.AccountType}
 */
proto.datanode.api.v1.AccountsSubscribeRequest.prototype.getType = function() {
  return /** @type {!proto.vega.AccountType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.vega.AccountType} value
 * @return {!proto.datanode.api.v1.AccountsSubscribeRequest} returns this
 */
proto.datanode.api.v1.AccountsSubscribeRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.AccountsSubscribeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.AccountsSubscribeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.AccountsSubscribeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.AccountsSubscribeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: (f = msg.getAccount()) && vega_vega_pb.Account.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.AccountsSubscribeResponse}
 */
proto.datanode.api.v1.AccountsSubscribeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.AccountsSubscribeResponse;
  return proto.datanode.api.v1.AccountsSubscribeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.AccountsSubscribeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.AccountsSubscribeResponse}
 */
proto.datanode.api.v1.AccountsSubscribeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Account;
      reader.readMessage(value,vega_vega_pb.Account.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.AccountsSubscribeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.AccountsSubscribeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.AccountsSubscribeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.AccountsSubscribeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_vega_pb.Account.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.Account account = 1;
 * @return {?proto.vega.Account}
 */
proto.datanode.api.v1.AccountsSubscribeResponse.prototype.getAccount = function() {
  return /** @type{?proto.vega.Account} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.Account, 1));
};


/**
 * @param {?proto.vega.Account|undefined} value
 * @return {!proto.datanode.api.v1.AccountsSubscribeResponse} returns this
*/
proto.datanode.api.v1.AccountsSubscribeResponse.prototype.setAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.AccountsSubscribeResponse} returns this
 */
proto.datanode.api.v1.AccountsSubscribeResponse.prototype.clearAccount = function() {
  return this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.AccountsSubscribeResponse.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.OrdersSubscribeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.OrdersSubscribeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.OrdersSubscribeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OrdersSubscribeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    partyId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.OrdersSubscribeRequest}
 */
proto.datanode.api.v1.OrdersSubscribeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.OrdersSubscribeRequest;
  return proto.datanode.api.v1.OrdersSubscribeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.OrdersSubscribeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.OrdersSubscribeRequest}
 */
proto.datanode.api.v1.OrdersSubscribeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.OrdersSubscribeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.OrdersSubscribeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.OrdersSubscribeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OrdersSubscribeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPartyId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.OrdersSubscribeRequest.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.OrdersSubscribeRequest} returns this
 */
proto.datanode.api.v1.OrdersSubscribeRequest.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string party_id = 2;
 * @return {string}
 */
proto.datanode.api.v1.OrdersSubscribeRequest.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.OrdersSubscribeRequest} returns this
 */
proto.datanode.api.v1.OrdersSubscribeRequest.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.TradesSubscribeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.TradesSubscribeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.TradesSubscribeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.TradesSubscribeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    partyId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.TradesSubscribeRequest}
 */
proto.datanode.api.v1.TradesSubscribeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.TradesSubscribeRequest;
  return proto.datanode.api.v1.TradesSubscribeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.TradesSubscribeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.TradesSubscribeRequest}
 */
proto.datanode.api.v1.TradesSubscribeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.TradesSubscribeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.TradesSubscribeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.TradesSubscribeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.TradesSubscribeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPartyId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.TradesSubscribeRequest.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.TradesSubscribeRequest} returns this
 */
proto.datanode.api.v1.TradesSubscribeRequest.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string party_id = 2;
 * @return {string}
 */
proto.datanode.api.v1.TradesSubscribeRequest.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.TradesSubscribeRequest} returns this
 */
proto.datanode.api.v1.TradesSubscribeRequest.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.CandlesSubscribeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.CandlesSubscribeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.CandlesSubscribeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.CandlesSubscribeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    interval: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.CandlesSubscribeRequest}
 */
proto.datanode.api.v1.CandlesSubscribeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.CandlesSubscribeRequest;
  return proto.datanode.api.v1.CandlesSubscribeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.CandlesSubscribeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.CandlesSubscribeRequest}
 */
proto.datanode.api.v1.CandlesSubscribeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 2:
      var value = /** @type {!proto.vega.Interval} */ (reader.readEnum());
      msg.setInterval(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.CandlesSubscribeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.CandlesSubscribeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.CandlesSubscribeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.CandlesSubscribeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInterval();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.CandlesSubscribeRequest.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.CandlesSubscribeRequest} returns this
 */
proto.datanode.api.v1.CandlesSubscribeRequest.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional vega.Interval interval = 2;
 * @return {!proto.vega.Interval}
 */
proto.datanode.api.v1.CandlesSubscribeRequest.prototype.getInterval = function() {
  return /** @type {!proto.vega.Interval} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.vega.Interval} value
 * @return {!proto.datanode.api.v1.CandlesSubscribeRequest} returns this
 */
proto.datanode.api.v1.CandlesSubscribeRequest.prototype.setInterval = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.CandlesSubscribeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.CandlesSubscribeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.CandlesSubscribeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.CandlesSubscribeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    candle: (f = msg.getCandle()) && vega_vega_pb.Candle.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.CandlesSubscribeResponse}
 */
proto.datanode.api.v1.CandlesSubscribeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.CandlesSubscribeResponse;
  return proto.datanode.api.v1.CandlesSubscribeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.CandlesSubscribeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.CandlesSubscribeResponse}
 */
proto.datanode.api.v1.CandlesSubscribeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Candle;
      reader.readMessage(value,vega_vega_pb.Candle.deserializeBinaryFromReader);
      msg.setCandle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.CandlesSubscribeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.CandlesSubscribeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.CandlesSubscribeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.CandlesSubscribeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCandle();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_vega_pb.Candle.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.Candle candle = 1;
 * @return {?proto.vega.Candle}
 */
proto.datanode.api.v1.CandlesSubscribeResponse.prototype.getCandle = function() {
  return /** @type{?proto.vega.Candle} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.Candle, 1));
};


/**
 * @param {?proto.vega.Candle|undefined} value
 * @return {!proto.datanode.api.v1.CandlesSubscribeResponse} returns this
*/
proto.datanode.api.v1.CandlesSubscribeResponse.prototype.setCandle = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.CandlesSubscribeResponse} returns this
 */
proto.datanode.api.v1.CandlesSubscribeResponse.prototype.clearCandle = function() {
  return this.setCandle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.CandlesSubscribeResponse.prototype.hasCandle = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.MarketDepthSubscribeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.MarketDepthSubscribeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.MarketDepthSubscribeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketDepthSubscribeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.MarketDepthSubscribeRequest}
 */
proto.datanode.api.v1.MarketDepthSubscribeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.MarketDepthSubscribeRequest;
  return proto.datanode.api.v1.MarketDepthSubscribeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.MarketDepthSubscribeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.MarketDepthSubscribeRequest}
 */
proto.datanode.api.v1.MarketDepthSubscribeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.MarketDepthSubscribeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.MarketDepthSubscribeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.MarketDepthSubscribeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketDepthSubscribeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.MarketDepthSubscribeRequest.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.MarketDepthSubscribeRequest} returns this
 */
proto.datanode.api.v1.MarketDepthSubscribeRequest.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.MarketDepthSubscribeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.MarketDepthSubscribeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.MarketDepthSubscribeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketDepthSubscribeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketDepth: (f = msg.getMarketDepth()) && vega_vega_pb.MarketDepth.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.MarketDepthSubscribeResponse}
 */
proto.datanode.api.v1.MarketDepthSubscribeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.MarketDepthSubscribeResponse;
  return proto.datanode.api.v1.MarketDepthSubscribeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.MarketDepthSubscribeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.MarketDepthSubscribeResponse}
 */
proto.datanode.api.v1.MarketDepthSubscribeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.MarketDepth;
      reader.readMessage(value,vega_vega_pb.MarketDepth.deserializeBinaryFromReader);
      msg.setMarketDepth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.MarketDepthSubscribeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.MarketDepthSubscribeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.MarketDepthSubscribeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketDepthSubscribeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketDepth();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_vega_pb.MarketDepth.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.MarketDepth market_depth = 1;
 * @return {?proto.vega.MarketDepth}
 */
proto.datanode.api.v1.MarketDepthSubscribeResponse.prototype.getMarketDepth = function() {
  return /** @type{?proto.vega.MarketDepth} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.MarketDepth, 1));
};


/**
 * @param {?proto.vega.MarketDepth|undefined} value
 * @return {!proto.datanode.api.v1.MarketDepthSubscribeResponse} returns this
*/
proto.datanode.api.v1.MarketDepthSubscribeResponse.prototype.setMarketDepth = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.MarketDepthSubscribeResponse} returns this
 */
proto.datanode.api.v1.MarketDepthSubscribeResponse.prototype.clearMarketDepth = function() {
  return this.setMarketDepth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.MarketDepthSubscribeResponse.prototype.hasMarketDepth = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.MarketDepthUpdatesSubscribeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.MarketDepthUpdatesSubscribeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.MarketDepthUpdatesSubscribeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketDepthUpdatesSubscribeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.MarketDepthUpdatesSubscribeRequest}
 */
proto.datanode.api.v1.MarketDepthUpdatesSubscribeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.MarketDepthUpdatesSubscribeRequest;
  return proto.datanode.api.v1.MarketDepthUpdatesSubscribeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.MarketDepthUpdatesSubscribeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.MarketDepthUpdatesSubscribeRequest}
 */
proto.datanode.api.v1.MarketDepthUpdatesSubscribeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.MarketDepthUpdatesSubscribeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.MarketDepthUpdatesSubscribeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.MarketDepthUpdatesSubscribeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketDepthUpdatesSubscribeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.MarketDepthUpdatesSubscribeRequest.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.MarketDepthUpdatesSubscribeRequest} returns this
 */
proto.datanode.api.v1.MarketDepthUpdatesSubscribeRequest.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.MarketDepthUpdatesSubscribeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.MarketDepthUpdatesSubscribeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.MarketDepthUpdatesSubscribeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketDepthUpdatesSubscribeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    update: (f = msg.getUpdate()) && vega_vega_pb.MarketDepthUpdate.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.MarketDepthUpdatesSubscribeResponse}
 */
proto.datanode.api.v1.MarketDepthUpdatesSubscribeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.MarketDepthUpdatesSubscribeResponse;
  return proto.datanode.api.v1.MarketDepthUpdatesSubscribeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.MarketDepthUpdatesSubscribeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.MarketDepthUpdatesSubscribeResponse}
 */
proto.datanode.api.v1.MarketDepthUpdatesSubscribeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.MarketDepthUpdate;
      reader.readMessage(value,vega_vega_pb.MarketDepthUpdate.deserializeBinaryFromReader);
      msg.setUpdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.MarketDepthUpdatesSubscribeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.MarketDepthUpdatesSubscribeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.MarketDepthUpdatesSubscribeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketDepthUpdatesSubscribeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUpdate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_vega_pb.MarketDepthUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.MarketDepthUpdate update = 1;
 * @return {?proto.vega.MarketDepthUpdate}
 */
proto.datanode.api.v1.MarketDepthUpdatesSubscribeResponse.prototype.getUpdate = function() {
  return /** @type{?proto.vega.MarketDepthUpdate} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.MarketDepthUpdate, 1));
};


/**
 * @param {?proto.vega.MarketDepthUpdate|undefined} value
 * @return {!proto.datanode.api.v1.MarketDepthUpdatesSubscribeResponse} returns this
*/
proto.datanode.api.v1.MarketDepthUpdatesSubscribeResponse.prototype.setUpdate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.MarketDepthUpdatesSubscribeResponse} returns this
 */
proto.datanode.api.v1.MarketDepthUpdatesSubscribeResponse.prototype.clearUpdate = function() {
  return this.setUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.MarketDepthUpdatesSubscribeResponse.prototype.hasUpdate = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.PositionsSubscribeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.PositionsSubscribeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.PositionsSubscribeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.PositionsSubscribeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    marketId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.PositionsSubscribeRequest}
 */
proto.datanode.api.v1.PositionsSubscribeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.PositionsSubscribeRequest;
  return proto.datanode.api.v1.PositionsSubscribeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.PositionsSubscribeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.PositionsSubscribeRequest}
 */
proto.datanode.api.v1.PositionsSubscribeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.PositionsSubscribeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.PositionsSubscribeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.PositionsSubscribeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.PositionsSubscribeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string party_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.PositionsSubscribeRequest.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.PositionsSubscribeRequest} returns this
 */
proto.datanode.api.v1.PositionsSubscribeRequest.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string market_id = 2;
 * @return {string}
 */
proto.datanode.api.v1.PositionsSubscribeRequest.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.PositionsSubscribeRequest} returns this
 */
proto.datanode.api.v1.PositionsSubscribeRequest.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.PositionsSubscribeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.PositionsSubscribeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.PositionsSubscribeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.PositionsSubscribeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: (f = msg.getPosition()) && vega_vega_pb.Position.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.PositionsSubscribeResponse}
 */
proto.datanode.api.v1.PositionsSubscribeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.PositionsSubscribeResponse;
  return proto.datanode.api.v1.PositionsSubscribeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.PositionsSubscribeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.PositionsSubscribeResponse}
 */
proto.datanode.api.v1.PositionsSubscribeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Position;
      reader.readMessage(value,vega_vega_pb.Position.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.PositionsSubscribeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.PositionsSubscribeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.PositionsSubscribeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.PositionsSubscribeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_vega_pb.Position.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.Position position = 1;
 * @return {?proto.vega.Position}
 */
proto.datanode.api.v1.PositionsSubscribeResponse.prototype.getPosition = function() {
  return /** @type{?proto.vega.Position} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.Position, 1));
};


/**
 * @param {?proto.vega.Position|undefined} value
 * @return {!proto.datanode.api.v1.PositionsSubscribeResponse} returns this
*/
proto.datanode.api.v1.PositionsSubscribeResponse.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.PositionsSubscribeResponse} returns this
 */
proto.datanode.api.v1.PositionsSubscribeResponse.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.PositionsSubscribeResponse.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.OrdersByMarketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.OrdersByMarketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.OrdersByMarketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OrdersByMarketRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pagination: (f = msg.getPagination()) && proto.datanode.api.v1.Pagination.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.OrdersByMarketRequest}
 */
proto.datanode.api.v1.OrdersByMarketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.OrdersByMarketRequest;
  return proto.datanode.api.v1.OrdersByMarketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.OrdersByMarketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.OrdersByMarketRequest}
 */
proto.datanode.api.v1.OrdersByMarketRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 2:
      var value = new proto.datanode.api.v1.Pagination;
      reader.readMessage(value,proto.datanode.api.v1.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.OrdersByMarketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.OrdersByMarketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.OrdersByMarketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OrdersByMarketRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.datanode.api.v1.Pagination.serializeBinaryToWriter
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.OrdersByMarketRequest.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.OrdersByMarketRequest} returns this
 */
proto.datanode.api.v1.OrdersByMarketRequest.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Pagination pagination = 2;
 * @return {?proto.datanode.api.v1.Pagination}
 */
proto.datanode.api.v1.OrdersByMarketRequest.prototype.getPagination = function() {
  return /** @type{?proto.datanode.api.v1.Pagination} */ (
    jspb.Message.getWrapperField(this, proto.datanode.api.v1.Pagination, 2));
};


/**
 * @param {?proto.datanode.api.v1.Pagination|undefined} value
 * @return {!proto.datanode.api.v1.OrdersByMarketRequest} returns this
*/
proto.datanode.api.v1.OrdersByMarketRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.OrdersByMarketRequest} returns this
 */
proto.datanode.api.v1.OrdersByMarketRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.OrdersByMarketRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.OrdersByMarketResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.OrdersByMarketResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.OrdersByMarketResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.OrdersByMarketResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OrdersByMarketResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ordersList: jspb.Message.toObjectList(msg.getOrdersList(),
    vega_vega_pb.Order.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.OrdersByMarketResponse}
 */
proto.datanode.api.v1.OrdersByMarketResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.OrdersByMarketResponse;
  return proto.datanode.api.v1.OrdersByMarketResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.OrdersByMarketResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.OrdersByMarketResponse}
 */
proto.datanode.api.v1.OrdersByMarketResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Order;
      reader.readMessage(value,vega_vega_pb.Order.deserializeBinaryFromReader);
      msg.addOrders(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.OrdersByMarketResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.OrdersByMarketResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.OrdersByMarketResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OrdersByMarketResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_vega_pb.Order.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Order orders = 1;
 * @return {!Array<!proto.vega.Order>}
 */
proto.datanode.api.v1.OrdersByMarketResponse.prototype.getOrdersList = function() {
  return /** @type{!Array<!proto.vega.Order>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.Order, 1));
};


/**
 * @param {!Array<!proto.vega.Order>} value
 * @return {!proto.datanode.api.v1.OrdersByMarketResponse} returns this
*/
proto.datanode.api.v1.OrdersByMarketResponse.prototype.setOrdersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Order=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Order}
 */
proto.datanode.api.v1.OrdersByMarketResponse.prototype.addOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Order, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.OrdersByMarketResponse} returns this
 */
proto.datanode.api.v1.OrdersByMarketResponse.prototype.clearOrdersList = function() {
  return this.setOrdersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.OrdersByPartyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.OrdersByPartyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.OrdersByPartyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OrdersByPartyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pagination: (f = msg.getPagination()) && proto.datanode.api.v1.Pagination.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.OrdersByPartyRequest}
 */
proto.datanode.api.v1.OrdersByPartyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.OrdersByPartyRequest;
  return proto.datanode.api.v1.OrdersByPartyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.OrdersByPartyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.OrdersByPartyRequest}
 */
proto.datanode.api.v1.OrdersByPartyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyId(value);
      break;
    case 2:
      var value = new proto.datanode.api.v1.Pagination;
      reader.readMessage(value,proto.datanode.api.v1.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.OrdersByPartyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.OrdersByPartyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.OrdersByPartyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OrdersByPartyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.datanode.api.v1.Pagination.serializeBinaryToWriter
    );
  }
};


/**
 * optional string party_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.OrdersByPartyRequest.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.OrdersByPartyRequest} returns this
 */
proto.datanode.api.v1.OrdersByPartyRequest.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Pagination pagination = 2;
 * @return {?proto.datanode.api.v1.Pagination}
 */
proto.datanode.api.v1.OrdersByPartyRequest.prototype.getPagination = function() {
  return /** @type{?proto.datanode.api.v1.Pagination} */ (
    jspb.Message.getWrapperField(this, proto.datanode.api.v1.Pagination, 2));
};


/**
 * @param {?proto.datanode.api.v1.Pagination|undefined} value
 * @return {!proto.datanode.api.v1.OrdersByPartyRequest} returns this
*/
proto.datanode.api.v1.OrdersByPartyRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.OrdersByPartyRequest} returns this
 */
proto.datanode.api.v1.OrdersByPartyRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.OrdersByPartyRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.OrdersByPartyResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.OrdersByPartyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.OrdersByPartyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.OrdersByPartyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OrdersByPartyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ordersList: jspb.Message.toObjectList(msg.getOrdersList(),
    vega_vega_pb.Order.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.OrdersByPartyResponse}
 */
proto.datanode.api.v1.OrdersByPartyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.OrdersByPartyResponse;
  return proto.datanode.api.v1.OrdersByPartyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.OrdersByPartyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.OrdersByPartyResponse}
 */
proto.datanode.api.v1.OrdersByPartyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Order;
      reader.readMessage(value,vega_vega_pb.Order.deserializeBinaryFromReader);
      msg.addOrders(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.OrdersByPartyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.OrdersByPartyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.OrdersByPartyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OrdersByPartyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_vega_pb.Order.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Order orders = 1;
 * @return {!Array<!proto.vega.Order>}
 */
proto.datanode.api.v1.OrdersByPartyResponse.prototype.getOrdersList = function() {
  return /** @type{!Array<!proto.vega.Order>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.Order, 1));
};


/**
 * @param {!Array<!proto.vega.Order>} value
 * @return {!proto.datanode.api.v1.OrdersByPartyResponse} returns this
*/
proto.datanode.api.v1.OrdersByPartyResponse.prototype.setOrdersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Order=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Order}
 */
proto.datanode.api.v1.OrdersByPartyResponse.prototype.addOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Order, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.OrdersByPartyResponse} returns this
 */
proto.datanode.api.v1.OrdersByPartyResponse.prototype.clearOrdersList = function() {
  return this.setOrdersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.OrderByMarketAndIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.OrderByMarketAndIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.OrderByMarketAndIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OrderByMarketAndIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orderId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.OrderByMarketAndIDRequest}
 */
proto.datanode.api.v1.OrderByMarketAndIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.OrderByMarketAndIDRequest;
  return proto.datanode.api.v1.OrderByMarketAndIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.OrderByMarketAndIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.OrderByMarketAndIDRequest}
 */
proto.datanode.api.v1.OrderByMarketAndIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.OrderByMarketAndIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.OrderByMarketAndIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.OrderByMarketAndIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OrderByMarketAndIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrderId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.OrderByMarketAndIDRequest.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.OrderByMarketAndIDRequest} returns this
 */
proto.datanode.api.v1.OrderByMarketAndIDRequest.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string order_id = 2;
 * @return {string}
 */
proto.datanode.api.v1.OrderByMarketAndIDRequest.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.OrderByMarketAndIDRequest} returns this
 */
proto.datanode.api.v1.OrderByMarketAndIDRequest.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.OrderByMarketAndIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.OrderByMarketAndIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.OrderByMarketAndIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OrderByMarketAndIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    order: (f = msg.getOrder()) && vega_vega_pb.Order.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.OrderByMarketAndIDResponse}
 */
proto.datanode.api.v1.OrderByMarketAndIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.OrderByMarketAndIDResponse;
  return proto.datanode.api.v1.OrderByMarketAndIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.OrderByMarketAndIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.OrderByMarketAndIDResponse}
 */
proto.datanode.api.v1.OrderByMarketAndIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Order;
      reader.readMessage(value,vega_vega_pb.Order.deserializeBinaryFromReader);
      msg.setOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.OrderByMarketAndIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.OrderByMarketAndIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.OrderByMarketAndIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OrderByMarketAndIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_vega_pb.Order.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.Order order = 1;
 * @return {?proto.vega.Order}
 */
proto.datanode.api.v1.OrderByMarketAndIDResponse.prototype.getOrder = function() {
  return /** @type{?proto.vega.Order} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.Order, 1));
};


/**
 * @param {?proto.vega.Order|undefined} value
 * @return {!proto.datanode.api.v1.OrderByMarketAndIDResponse} returns this
*/
proto.datanode.api.v1.OrderByMarketAndIDResponse.prototype.setOrder = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.OrderByMarketAndIDResponse} returns this
 */
proto.datanode.api.v1.OrderByMarketAndIDResponse.prototype.clearOrder = function() {
  return this.setOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.OrderByMarketAndIDResponse.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.OrderByReferenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.OrderByReferenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.OrderByReferenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OrderByReferenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    reference: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.OrderByReferenceRequest}
 */
proto.datanode.api.v1.OrderByReferenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.OrderByReferenceRequest;
  return proto.datanode.api.v1.OrderByReferenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.OrderByReferenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.OrderByReferenceRequest}
 */
proto.datanode.api.v1.OrderByReferenceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReference(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.OrderByReferenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.OrderByReferenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.OrderByReferenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OrderByReferenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReference();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string reference = 1;
 * @return {string}
 */
proto.datanode.api.v1.OrderByReferenceRequest.prototype.getReference = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.OrderByReferenceRequest} returns this
 */
proto.datanode.api.v1.OrderByReferenceRequest.prototype.setReference = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.OrderByReferenceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.OrderByReferenceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.OrderByReferenceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OrderByReferenceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    order: (f = msg.getOrder()) && vega_vega_pb.Order.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.OrderByReferenceResponse}
 */
proto.datanode.api.v1.OrderByReferenceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.OrderByReferenceResponse;
  return proto.datanode.api.v1.OrderByReferenceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.OrderByReferenceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.OrderByReferenceResponse}
 */
proto.datanode.api.v1.OrderByReferenceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Order;
      reader.readMessage(value,vega_vega_pb.Order.deserializeBinaryFromReader);
      msg.setOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.OrderByReferenceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.OrderByReferenceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.OrderByReferenceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OrderByReferenceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_vega_pb.Order.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.Order order = 1;
 * @return {?proto.vega.Order}
 */
proto.datanode.api.v1.OrderByReferenceResponse.prototype.getOrder = function() {
  return /** @type{?proto.vega.Order} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.Order, 1));
};


/**
 * @param {?proto.vega.Order|undefined} value
 * @return {!proto.datanode.api.v1.OrderByReferenceResponse} returns this
*/
proto.datanode.api.v1.OrderByReferenceResponse.prototype.setOrder = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.OrderByReferenceResponse} returns this
 */
proto.datanode.api.v1.OrderByReferenceResponse.prototype.clearOrder = function() {
  return this.setOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.OrderByReferenceResponse.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.MarketsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.MarketsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.MarketsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.MarketsRequest}
 */
proto.datanode.api.v1.MarketsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.MarketsRequest;
  return proto.datanode.api.v1.MarketsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.MarketsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.MarketsRequest}
 */
proto.datanode.api.v1.MarketsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.MarketsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.MarketsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.MarketsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.MarketsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.MarketsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.MarketsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.MarketsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketsList: jspb.Message.toObjectList(msg.getMarketsList(),
    vega_markets_pb.Market.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.MarketsResponse}
 */
proto.datanode.api.v1.MarketsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.MarketsResponse;
  return proto.datanode.api.v1.MarketsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.MarketsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.MarketsResponse}
 */
proto.datanode.api.v1.MarketsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_markets_pb.Market;
      reader.readMessage(value,vega_markets_pb.Market.deserializeBinaryFromReader);
      msg.addMarkets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.MarketsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.MarketsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.MarketsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_markets_pb.Market.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Market markets = 1;
 * @return {!Array<!proto.vega.Market>}
 */
proto.datanode.api.v1.MarketsResponse.prototype.getMarketsList = function() {
  return /** @type{!Array<!proto.vega.Market>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_markets_pb.Market, 1));
};


/**
 * @param {!Array<!proto.vega.Market>} value
 * @return {!proto.datanode.api.v1.MarketsResponse} returns this
*/
proto.datanode.api.v1.MarketsResponse.prototype.setMarketsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Market=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Market}
 */
proto.datanode.api.v1.MarketsResponse.prototype.addMarkets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Market, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.MarketsResponse} returns this
 */
proto.datanode.api.v1.MarketsResponse.prototype.clearMarketsList = function() {
  return this.setMarketsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.CandlesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.CandlesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.CandlesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.CandlesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sinceTimestamp: jspb.Message.getFieldWithDefault(msg, 2, 0),
    interval: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.CandlesRequest}
 */
proto.datanode.api.v1.CandlesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.CandlesRequest;
  return proto.datanode.api.v1.CandlesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.CandlesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.CandlesRequest}
 */
proto.datanode.api.v1.CandlesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSinceTimestamp(value);
      break;
    case 3:
      var value = /** @type {!proto.vega.Interval} */ (reader.readEnum());
      msg.setInterval(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.CandlesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.CandlesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.CandlesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.CandlesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSinceTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getInterval();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.CandlesRequest.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.CandlesRequest} returns this
 */
proto.datanode.api.v1.CandlesRequest.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 since_timestamp = 2;
 * @return {number}
 */
proto.datanode.api.v1.CandlesRequest.prototype.getSinceTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.datanode.api.v1.CandlesRequest} returns this
 */
proto.datanode.api.v1.CandlesRequest.prototype.setSinceTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional vega.Interval interval = 3;
 * @return {!proto.vega.Interval}
 */
proto.datanode.api.v1.CandlesRequest.prototype.getInterval = function() {
  return /** @type {!proto.vega.Interval} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.vega.Interval} value
 * @return {!proto.datanode.api.v1.CandlesRequest} returns this
 */
proto.datanode.api.v1.CandlesRequest.prototype.setInterval = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.CandlesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.CandlesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.CandlesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.CandlesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.CandlesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    candlesList: jspb.Message.toObjectList(msg.getCandlesList(),
    vega_vega_pb.Candle.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.CandlesResponse}
 */
proto.datanode.api.v1.CandlesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.CandlesResponse;
  return proto.datanode.api.v1.CandlesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.CandlesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.CandlesResponse}
 */
proto.datanode.api.v1.CandlesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Candle;
      reader.readMessage(value,vega_vega_pb.Candle.deserializeBinaryFromReader);
      msg.addCandles(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.CandlesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.CandlesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.CandlesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.CandlesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCandlesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_vega_pb.Candle.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Candle candles = 1;
 * @return {!Array<!proto.vega.Candle>}
 */
proto.datanode.api.v1.CandlesResponse.prototype.getCandlesList = function() {
  return /** @type{!Array<!proto.vega.Candle>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.Candle, 1));
};


/**
 * @param {!Array<!proto.vega.Candle>} value
 * @return {!proto.datanode.api.v1.CandlesResponse} returns this
*/
proto.datanode.api.v1.CandlesResponse.prototype.setCandlesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Candle=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Candle}
 */
proto.datanode.api.v1.CandlesResponse.prototype.addCandles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Candle, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.CandlesResponse} returns this
 */
proto.datanode.api.v1.CandlesResponse.prototype.clearCandlesList = function() {
  return this.setCandlesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.MarketDepthRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.MarketDepthRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.MarketDepthRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketDepthRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    maxDepth: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.MarketDepthRequest}
 */
proto.datanode.api.v1.MarketDepthRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.MarketDepthRequest;
  return proto.datanode.api.v1.MarketDepthRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.MarketDepthRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.MarketDepthRequest}
 */
proto.datanode.api.v1.MarketDepthRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxDepth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.MarketDepthRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.MarketDepthRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.MarketDepthRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketDepthRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMaxDepth();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.MarketDepthRequest.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.MarketDepthRequest} returns this
 */
proto.datanode.api.v1.MarketDepthRequest.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 max_depth = 2;
 * @return {number}
 */
proto.datanode.api.v1.MarketDepthRequest.prototype.getMaxDepth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.datanode.api.v1.MarketDepthRequest} returns this
 */
proto.datanode.api.v1.MarketDepthRequest.prototype.setMaxDepth = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.MarketDepthResponse.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.MarketDepthResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.MarketDepthResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.MarketDepthResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketDepthResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    buyList: jspb.Message.toObjectList(msg.getBuyList(),
    vega_vega_pb.PriceLevel.toObject, includeInstance),
    sellList: jspb.Message.toObjectList(msg.getSellList(),
    vega_vega_pb.PriceLevel.toObject, includeInstance),
    lastTrade: (f = msg.getLastTrade()) && vega_vega_pb.Trade.toObject(includeInstance, f),
    sequenceNumber: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.MarketDepthResponse}
 */
proto.datanode.api.v1.MarketDepthResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.MarketDepthResponse;
  return proto.datanode.api.v1.MarketDepthResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.MarketDepthResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.MarketDepthResponse}
 */
proto.datanode.api.v1.MarketDepthResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 2:
      var value = new vega_vega_pb.PriceLevel;
      reader.readMessage(value,vega_vega_pb.PriceLevel.deserializeBinaryFromReader);
      msg.addBuy(value);
      break;
    case 3:
      var value = new vega_vega_pb.PriceLevel;
      reader.readMessage(value,vega_vega_pb.PriceLevel.deserializeBinaryFromReader);
      msg.addSell(value);
      break;
    case 4:
      var value = new vega_vega_pb.Trade;
      reader.readMessage(value,vega_vega_pb.Trade.deserializeBinaryFromReader);
      msg.setLastTrade(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequenceNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.MarketDepthResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.MarketDepthResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.MarketDepthResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketDepthResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBuyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      vega_vega_pb.PriceLevel.serializeBinaryToWriter
    );
  }
  f = message.getSellList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      vega_vega_pb.PriceLevel.serializeBinaryToWriter
    );
  }
  f = message.getLastTrade();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      vega_vega_pb.Trade.serializeBinaryToWriter
    );
  }
  f = message.getSequenceNumber();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.MarketDepthResponse.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.MarketDepthResponse} returns this
 */
proto.datanode.api.v1.MarketDepthResponse.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated vega.PriceLevel buy = 2;
 * @return {!Array<!proto.vega.PriceLevel>}
 */
proto.datanode.api.v1.MarketDepthResponse.prototype.getBuyList = function() {
  return /** @type{!Array<!proto.vega.PriceLevel>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.PriceLevel, 2));
};


/**
 * @param {!Array<!proto.vega.PriceLevel>} value
 * @return {!proto.datanode.api.v1.MarketDepthResponse} returns this
*/
proto.datanode.api.v1.MarketDepthResponse.prototype.setBuyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vega.PriceLevel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.PriceLevel}
 */
proto.datanode.api.v1.MarketDepthResponse.prototype.addBuy = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vega.PriceLevel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.MarketDepthResponse} returns this
 */
proto.datanode.api.v1.MarketDepthResponse.prototype.clearBuyList = function() {
  return this.setBuyList([]);
};


/**
 * repeated vega.PriceLevel sell = 3;
 * @return {!Array<!proto.vega.PriceLevel>}
 */
proto.datanode.api.v1.MarketDepthResponse.prototype.getSellList = function() {
  return /** @type{!Array<!proto.vega.PriceLevel>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.PriceLevel, 3));
};


/**
 * @param {!Array<!proto.vega.PriceLevel>} value
 * @return {!proto.datanode.api.v1.MarketDepthResponse} returns this
*/
proto.datanode.api.v1.MarketDepthResponse.prototype.setSellList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.vega.PriceLevel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.PriceLevel}
 */
proto.datanode.api.v1.MarketDepthResponse.prototype.addSell = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.vega.PriceLevel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.MarketDepthResponse} returns this
 */
proto.datanode.api.v1.MarketDepthResponse.prototype.clearSellList = function() {
  return this.setSellList([]);
};


/**
 * optional vega.Trade last_trade = 4;
 * @return {?proto.vega.Trade}
 */
proto.datanode.api.v1.MarketDepthResponse.prototype.getLastTrade = function() {
  return /** @type{?proto.vega.Trade} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.Trade, 4));
};


/**
 * @param {?proto.vega.Trade|undefined} value
 * @return {!proto.datanode.api.v1.MarketDepthResponse} returns this
*/
proto.datanode.api.v1.MarketDepthResponse.prototype.setLastTrade = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.MarketDepthResponse} returns this
 */
proto.datanode.api.v1.MarketDepthResponse.prototype.clearLastTrade = function() {
  return this.setLastTrade(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.MarketDepthResponse.prototype.hasLastTrade = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 sequence_number = 5;
 * @return {number}
 */
proto.datanode.api.v1.MarketDepthResponse.prototype.getSequenceNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.datanode.api.v1.MarketDepthResponse} returns this
 */
proto.datanode.api.v1.MarketDepthResponse.prototype.setSequenceNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.TradesByMarketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.TradesByMarketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.TradesByMarketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.TradesByMarketRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pagination: (f = msg.getPagination()) && proto.datanode.api.v1.Pagination.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.TradesByMarketRequest}
 */
proto.datanode.api.v1.TradesByMarketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.TradesByMarketRequest;
  return proto.datanode.api.v1.TradesByMarketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.TradesByMarketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.TradesByMarketRequest}
 */
proto.datanode.api.v1.TradesByMarketRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 2:
      var value = new proto.datanode.api.v1.Pagination;
      reader.readMessage(value,proto.datanode.api.v1.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.TradesByMarketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.TradesByMarketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.TradesByMarketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.TradesByMarketRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.datanode.api.v1.Pagination.serializeBinaryToWriter
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.TradesByMarketRequest.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.TradesByMarketRequest} returns this
 */
proto.datanode.api.v1.TradesByMarketRequest.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Pagination pagination = 2;
 * @return {?proto.datanode.api.v1.Pagination}
 */
proto.datanode.api.v1.TradesByMarketRequest.prototype.getPagination = function() {
  return /** @type{?proto.datanode.api.v1.Pagination} */ (
    jspb.Message.getWrapperField(this, proto.datanode.api.v1.Pagination, 2));
};


/**
 * @param {?proto.datanode.api.v1.Pagination|undefined} value
 * @return {!proto.datanode.api.v1.TradesByMarketRequest} returns this
*/
proto.datanode.api.v1.TradesByMarketRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.TradesByMarketRequest} returns this
 */
proto.datanode.api.v1.TradesByMarketRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.TradesByMarketRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.TradesByMarketResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.TradesByMarketResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.TradesByMarketResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.TradesByMarketResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.TradesByMarketResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradesList: jspb.Message.toObjectList(msg.getTradesList(),
    vega_vega_pb.Trade.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.TradesByMarketResponse}
 */
proto.datanode.api.v1.TradesByMarketResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.TradesByMarketResponse;
  return proto.datanode.api.v1.TradesByMarketResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.TradesByMarketResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.TradesByMarketResponse}
 */
proto.datanode.api.v1.TradesByMarketResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Trade;
      reader.readMessage(value,vega_vega_pb.Trade.deserializeBinaryFromReader);
      msg.addTrades(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.TradesByMarketResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.TradesByMarketResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.TradesByMarketResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.TradesByMarketResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_vega_pb.Trade.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Trade trades = 1;
 * @return {!Array<!proto.vega.Trade>}
 */
proto.datanode.api.v1.TradesByMarketResponse.prototype.getTradesList = function() {
  return /** @type{!Array<!proto.vega.Trade>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.Trade, 1));
};


/**
 * @param {!Array<!proto.vega.Trade>} value
 * @return {!proto.datanode.api.v1.TradesByMarketResponse} returns this
*/
proto.datanode.api.v1.TradesByMarketResponse.prototype.setTradesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Trade=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Trade}
 */
proto.datanode.api.v1.TradesByMarketResponse.prototype.addTrades = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Trade, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.TradesByMarketResponse} returns this
 */
proto.datanode.api.v1.TradesByMarketResponse.prototype.clearTradesList = function() {
  return this.setTradesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.PositionsByPartyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.PositionsByPartyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.PositionsByPartyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.PositionsByPartyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    marketId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.PositionsByPartyRequest}
 */
proto.datanode.api.v1.PositionsByPartyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.PositionsByPartyRequest;
  return proto.datanode.api.v1.PositionsByPartyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.PositionsByPartyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.PositionsByPartyRequest}
 */
proto.datanode.api.v1.PositionsByPartyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.PositionsByPartyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.PositionsByPartyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.PositionsByPartyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.PositionsByPartyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string party_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.PositionsByPartyRequest.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.PositionsByPartyRequest} returns this
 */
proto.datanode.api.v1.PositionsByPartyRequest.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string market_id = 2;
 * @return {string}
 */
proto.datanode.api.v1.PositionsByPartyRequest.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.PositionsByPartyRequest} returns this
 */
proto.datanode.api.v1.PositionsByPartyRequest.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.PositionsByPartyResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.PositionsByPartyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.PositionsByPartyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.PositionsByPartyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.PositionsByPartyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    positionsList: jspb.Message.toObjectList(msg.getPositionsList(),
    vega_vega_pb.Position.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.PositionsByPartyResponse}
 */
proto.datanode.api.v1.PositionsByPartyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.PositionsByPartyResponse;
  return proto.datanode.api.v1.PositionsByPartyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.PositionsByPartyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.PositionsByPartyResponse}
 */
proto.datanode.api.v1.PositionsByPartyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Position;
      reader.readMessage(value,vega_vega_pb.Position.deserializeBinaryFromReader);
      msg.addPositions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.PositionsByPartyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.PositionsByPartyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.PositionsByPartyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.PositionsByPartyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPositionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_vega_pb.Position.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Position positions = 1;
 * @return {!Array<!proto.vega.Position>}
 */
proto.datanode.api.v1.PositionsByPartyResponse.prototype.getPositionsList = function() {
  return /** @type{!Array<!proto.vega.Position>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.Position, 1));
};


/**
 * @param {!Array<!proto.vega.Position>} value
 * @return {!proto.datanode.api.v1.PositionsByPartyResponse} returns this
*/
proto.datanode.api.v1.PositionsByPartyResponse.prototype.setPositionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Position=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Position}
 */
proto.datanode.api.v1.PositionsByPartyResponse.prototype.addPositions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Position, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.PositionsByPartyResponse} returns this
 */
proto.datanode.api.v1.PositionsByPartyResponse.prototype.clearPositionsList = function() {
  return this.setPositionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetVegaTimeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetVegaTimeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetVegaTimeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetVegaTimeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetVegaTimeRequest}
 */
proto.datanode.api.v1.GetVegaTimeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetVegaTimeRequest;
  return proto.datanode.api.v1.GetVegaTimeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetVegaTimeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetVegaTimeRequest}
 */
proto.datanode.api.v1.GetVegaTimeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetVegaTimeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetVegaTimeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetVegaTimeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetVegaTimeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetVegaTimeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetVegaTimeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetVegaTimeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetVegaTimeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetVegaTimeResponse}
 */
proto.datanode.api.v1.GetVegaTimeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetVegaTimeResponse;
  return proto.datanode.api.v1.GetVegaTimeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetVegaTimeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetVegaTimeResponse}
 */
proto.datanode.api.v1.GetVegaTimeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetVegaTimeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetVegaTimeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetVegaTimeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetVegaTimeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 timestamp = 1;
 * @return {number}
 */
proto.datanode.api.v1.GetVegaTimeResponse.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.datanode.api.v1.GetVegaTimeResponse} returns this
 */
proto.datanode.api.v1.GetVegaTimeResponse.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.Pagination.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.Pagination.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.Pagination} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.Pagination.toObject = function(includeInstance, msg) {
  var f, obj = {
    skip: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    descending: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.Pagination}
 */
proto.datanode.api.v1.Pagination.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.Pagination;
  return proto.datanode.api.v1.Pagination.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.Pagination} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.Pagination}
 */
proto.datanode.api.v1.Pagination.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSkip(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDescending(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.Pagination.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.Pagination.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.Pagination} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.Pagination.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkip();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getDescending();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional uint64 skip = 1;
 * @return {number}
 */
proto.datanode.api.v1.Pagination.prototype.getSkip = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.datanode.api.v1.Pagination} returns this
 */
proto.datanode.api.v1.Pagination.prototype.setSkip = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 limit = 2;
 * @return {number}
 */
proto.datanode.api.v1.Pagination.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.datanode.api.v1.Pagination} returns this
 */
proto.datanode.api.v1.Pagination.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool descending = 3;
 * @return {boolean}
 */
proto.datanode.api.v1.Pagination.prototype.getDescending = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.datanode.api.v1.Pagination} returns this
 */
proto.datanode.api.v1.Pagination.prototype.setDescending = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.OrdersSubscribeResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.OrdersSubscribeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.OrdersSubscribeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.OrdersSubscribeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OrdersSubscribeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ordersList: jspb.Message.toObjectList(msg.getOrdersList(),
    vega_vega_pb.Order.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.OrdersSubscribeResponse}
 */
proto.datanode.api.v1.OrdersSubscribeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.OrdersSubscribeResponse;
  return proto.datanode.api.v1.OrdersSubscribeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.OrdersSubscribeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.OrdersSubscribeResponse}
 */
proto.datanode.api.v1.OrdersSubscribeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Order;
      reader.readMessage(value,vega_vega_pb.Order.deserializeBinaryFromReader);
      msg.addOrders(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.OrdersSubscribeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.OrdersSubscribeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.OrdersSubscribeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OrdersSubscribeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_vega_pb.Order.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Order orders = 1;
 * @return {!Array<!proto.vega.Order>}
 */
proto.datanode.api.v1.OrdersSubscribeResponse.prototype.getOrdersList = function() {
  return /** @type{!Array<!proto.vega.Order>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.Order, 1));
};


/**
 * @param {!Array<!proto.vega.Order>} value
 * @return {!proto.datanode.api.v1.OrdersSubscribeResponse} returns this
*/
proto.datanode.api.v1.OrdersSubscribeResponse.prototype.setOrdersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Order=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Order}
 */
proto.datanode.api.v1.OrdersSubscribeResponse.prototype.addOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Order, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.OrdersSubscribeResponse} returns this
 */
proto.datanode.api.v1.OrdersSubscribeResponse.prototype.clearOrdersList = function() {
  return this.setOrdersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.TradesSubscribeResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.TradesSubscribeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.TradesSubscribeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.TradesSubscribeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.TradesSubscribeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradesList: jspb.Message.toObjectList(msg.getTradesList(),
    vega_vega_pb.Trade.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.TradesSubscribeResponse}
 */
proto.datanode.api.v1.TradesSubscribeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.TradesSubscribeResponse;
  return proto.datanode.api.v1.TradesSubscribeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.TradesSubscribeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.TradesSubscribeResponse}
 */
proto.datanode.api.v1.TradesSubscribeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Trade;
      reader.readMessage(value,vega_vega_pb.Trade.deserializeBinaryFromReader);
      msg.addTrades(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.TradesSubscribeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.TradesSubscribeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.TradesSubscribeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.TradesSubscribeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_vega_pb.Trade.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Trade trades = 1;
 * @return {!Array<!proto.vega.Trade>}
 */
proto.datanode.api.v1.TradesSubscribeResponse.prototype.getTradesList = function() {
  return /** @type{!Array<!proto.vega.Trade>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.Trade, 1));
};


/**
 * @param {!Array<!proto.vega.Trade>} value
 * @return {!proto.datanode.api.v1.TradesSubscribeResponse} returns this
*/
proto.datanode.api.v1.TradesSubscribeResponse.prototype.setTradesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Trade=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Trade}
 */
proto.datanode.api.v1.TradesSubscribeResponse.prototype.addTrades = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Trade, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.TradesSubscribeResponse} returns this
 */
proto.datanode.api.v1.TradesSubscribeResponse.prototype.clearTradesList = function() {
  return this.setTradesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.TransferResponsesSubscribeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.TransferResponsesSubscribeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.TransferResponsesSubscribeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.TransferResponsesSubscribeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.TransferResponsesSubscribeRequest}
 */
proto.datanode.api.v1.TransferResponsesSubscribeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.TransferResponsesSubscribeRequest;
  return proto.datanode.api.v1.TransferResponsesSubscribeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.TransferResponsesSubscribeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.TransferResponsesSubscribeRequest}
 */
proto.datanode.api.v1.TransferResponsesSubscribeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.TransferResponsesSubscribeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.TransferResponsesSubscribeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.TransferResponsesSubscribeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.TransferResponsesSubscribeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.TransferResponsesSubscribeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.TransferResponsesSubscribeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.TransferResponsesSubscribeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.TransferResponsesSubscribeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && vega_vega_pb.TransferResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.TransferResponsesSubscribeResponse}
 */
proto.datanode.api.v1.TransferResponsesSubscribeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.TransferResponsesSubscribeResponse;
  return proto.datanode.api.v1.TransferResponsesSubscribeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.TransferResponsesSubscribeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.TransferResponsesSubscribeResponse}
 */
proto.datanode.api.v1.TransferResponsesSubscribeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.TransferResponse;
      reader.readMessage(value,vega_vega_pb.TransferResponse.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.TransferResponsesSubscribeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.TransferResponsesSubscribeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.TransferResponsesSubscribeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.TransferResponsesSubscribeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_vega_pb.TransferResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.TransferResponse response = 1;
 * @return {?proto.vega.TransferResponse}
 */
proto.datanode.api.v1.TransferResponsesSubscribeResponse.prototype.getResponse = function() {
  return /** @type{?proto.vega.TransferResponse} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.TransferResponse, 1));
};


/**
 * @param {?proto.vega.TransferResponse|undefined} value
 * @return {!proto.datanode.api.v1.TransferResponsesSubscribeResponse} returns this
*/
proto.datanode.api.v1.TransferResponsesSubscribeResponse.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.TransferResponsesSubscribeResponse} returns this
 */
proto.datanode.api.v1.TransferResponsesSubscribeResponse.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.TransferResponsesSubscribeResponse.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.PartyAccountsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.PartyAccountsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.PartyAccountsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.PartyAccountsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    marketId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    asset: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.PartyAccountsRequest}
 */
proto.datanode.api.v1.PartyAccountsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.PartyAccountsRequest;
  return proto.datanode.api.v1.PartyAccountsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.PartyAccountsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.PartyAccountsRequest}
 */
proto.datanode.api.v1.PartyAccountsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 3:
      var value = /** @type {!proto.vega.AccountType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.PartyAccountsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.PartyAccountsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.PartyAccountsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.PartyAccountsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getAsset();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string party_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.PartyAccountsRequest.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.PartyAccountsRequest} returns this
 */
proto.datanode.api.v1.PartyAccountsRequest.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string market_id = 2;
 * @return {string}
 */
proto.datanode.api.v1.PartyAccountsRequest.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.PartyAccountsRequest} returns this
 */
proto.datanode.api.v1.PartyAccountsRequest.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional vega.AccountType type = 3;
 * @return {!proto.vega.AccountType}
 */
proto.datanode.api.v1.PartyAccountsRequest.prototype.getType = function() {
  return /** @type {!proto.vega.AccountType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.vega.AccountType} value
 * @return {!proto.datanode.api.v1.PartyAccountsRequest} returns this
 */
proto.datanode.api.v1.PartyAccountsRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string asset = 4;
 * @return {string}
 */
proto.datanode.api.v1.PartyAccountsRequest.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.PartyAccountsRequest} returns this
 */
proto.datanode.api.v1.PartyAccountsRequest.prototype.setAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.PartyAccountsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.PartyAccountsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.PartyAccountsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.PartyAccountsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.PartyAccountsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountsList: jspb.Message.toObjectList(msg.getAccountsList(),
    vega_vega_pb.Account.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.PartyAccountsResponse}
 */
proto.datanode.api.v1.PartyAccountsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.PartyAccountsResponse;
  return proto.datanode.api.v1.PartyAccountsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.PartyAccountsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.PartyAccountsResponse}
 */
proto.datanode.api.v1.PartyAccountsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Account;
      reader.readMessage(value,vega_vega_pb.Account.deserializeBinaryFromReader);
      msg.addAccounts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.PartyAccountsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.PartyAccountsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.PartyAccountsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.PartyAccountsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_vega_pb.Account.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Account accounts = 1;
 * @return {!Array<!proto.vega.Account>}
 */
proto.datanode.api.v1.PartyAccountsResponse.prototype.getAccountsList = function() {
  return /** @type{!Array<!proto.vega.Account>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.Account, 1));
};


/**
 * @param {!Array<!proto.vega.Account>} value
 * @return {!proto.datanode.api.v1.PartyAccountsResponse} returns this
*/
proto.datanode.api.v1.PartyAccountsResponse.prototype.setAccountsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Account=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Account}
 */
proto.datanode.api.v1.PartyAccountsResponse.prototype.addAccounts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Account, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.PartyAccountsResponse} returns this
 */
proto.datanode.api.v1.PartyAccountsResponse.prototype.clearAccountsList = function() {
  return this.setAccountsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.MarketAccountsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.MarketAccountsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.MarketAccountsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketAccountsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    asset: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.MarketAccountsRequest}
 */
proto.datanode.api.v1.MarketAccountsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.MarketAccountsRequest;
  return proto.datanode.api.v1.MarketAccountsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.MarketAccountsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.MarketAccountsRequest}
 */
proto.datanode.api.v1.MarketAccountsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.MarketAccountsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.MarketAccountsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.MarketAccountsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketAccountsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAsset();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.MarketAccountsRequest.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.MarketAccountsRequest} returns this
 */
proto.datanode.api.v1.MarketAccountsRequest.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string asset = 2;
 * @return {string}
 */
proto.datanode.api.v1.MarketAccountsRequest.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.MarketAccountsRequest} returns this
 */
proto.datanode.api.v1.MarketAccountsRequest.prototype.setAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.MarketAccountsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.MarketAccountsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.MarketAccountsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.MarketAccountsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketAccountsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountsList: jspb.Message.toObjectList(msg.getAccountsList(),
    vega_vega_pb.Account.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.MarketAccountsResponse}
 */
proto.datanode.api.v1.MarketAccountsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.MarketAccountsResponse;
  return proto.datanode.api.v1.MarketAccountsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.MarketAccountsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.MarketAccountsResponse}
 */
proto.datanode.api.v1.MarketAccountsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Account;
      reader.readMessage(value,vega_vega_pb.Account.deserializeBinaryFromReader);
      msg.addAccounts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.MarketAccountsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.MarketAccountsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.MarketAccountsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.MarketAccountsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_vega_pb.Account.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Account accounts = 1;
 * @return {!Array<!proto.vega.Account>}
 */
proto.datanode.api.v1.MarketAccountsResponse.prototype.getAccountsList = function() {
  return /** @type{!Array<!proto.vega.Account>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.Account, 1));
};


/**
 * @param {!Array<!proto.vega.Account>} value
 * @return {!proto.datanode.api.v1.MarketAccountsResponse} returns this
*/
proto.datanode.api.v1.MarketAccountsResponse.prototype.setAccountsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Account=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Account}
 */
proto.datanode.api.v1.MarketAccountsResponse.prototype.addAccounts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Account, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.MarketAccountsResponse} returns this
 */
proto.datanode.api.v1.MarketAccountsResponse.prototype.clearAccountsList = function() {
  return this.setAccountsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.FeeInfrastructureAccountsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.FeeInfrastructureAccountsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.FeeInfrastructureAccountsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.FeeInfrastructureAccountsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    asset: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.FeeInfrastructureAccountsRequest}
 */
proto.datanode.api.v1.FeeInfrastructureAccountsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.FeeInfrastructureAccountsRequest;
  return proto.datanode.api.v1.FeeInfrastructureAccountsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.FeeInfrastructureAccountsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.FeeInfrastructureAccountsRequest}
 */
proto.datanode.api.v1.FeeInfrastructureAccountsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.FeeInfrastructureAccountsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.FeeInfrastructureAccountsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.FeeInfrastructureAccountsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.FeeInfrastructureAccountsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAsset();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string asset = 1;
 * @return {string}
 */
proto.datanode.api.v1.FeeInfrastructureAccountsRequest.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.FeeInfrastructureAccountsRequest} returns this
 */
proto.datanode.api.v1.FeeInfrastructureAccountsRequest.prototype.setAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.FeeInfrastructureAccountsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.FeeInfrastructureAccountsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.FeeInfrastructureAccountsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.FeeInfrastructureAccountsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.FeeInfrastructureAccountsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountsList: jspb.Message.toObjectList(msg.getAccountsList(),
    vega_vega_pb.Account.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.FeeInfrastructureAccountsResponse}
 */
proto.datanode.api.v1.FeeInfrastructureAccountsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.FeeInfrastructureAccountsResponse;
  return proto.datanode.api.v1.FeeInfrastructureAccountsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.FeeInfrastructureAccountsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.FeeInfrastructureAccountsResponse}
 */
proto.datanode.api.v1.FeeInfrastructureAccountsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Account;
      reader.readMessage(value,vega_vega_pb.Account.deserializeBinaryFromReader);
      msg.addAccounts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.FeeInfrastructureAccountsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.FeeInfrastructureAccountsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.FeeInfrastructureAccountsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.FeeInfrastructureAccountsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_vega_pb.Account.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Account accounts = 1;
 * @return {!Array<!proto.vega.Account>}
 */
proto.datanode.api.v1.FeeInfrastructureAccountsResponse.prototype.getAccountsList = function() {
  return /** @type{!Array<!proto.vega.Account>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.Account, 1));
};


/**
 * @param {!Array<!proto.vega.Account>} value
 * @return {!proto.datanode.api.v1.FeeInfrastructureAccountsResponse} returns this
*/
proto.datanode.api.v1.FeeInfrastructureAccountsResponse.prototype.setAccountsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Account=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Account}
 */
proto.datanode.api.v1.FeeInfrastructureAccountsResponse.prototype.addAccounts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Account, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.FeeInfrastructureAccountsResponse} returns this
 */
proto.datanode.api.v1.FeeInfrastructureAccountsResponse.prototype.clearAccountsList = function() {
  return this.setAccountsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GlobalRewardPoolAccountsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GlobalRewardPoolAccountsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GlobalRewardPoolAccountsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GlobalRewardPoolAccountsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    asset: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GlobalRewardPoolAccountsRequest}
 */
proto.datanode.api.v1.GlobalRewardPoolAccountsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GlobalRewardPoolAccountsRequest;
  return proto.datanode.api.v1.GlobalRewardPoolAccountsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GlobalRewardPoolAccountsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GlobalRewardPoolAccountsRequest}
 */
proto.datanode.api.v1.GlobalRewardPoolAccountsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GlobalRewardPoolAccountsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GlobalRewardPoolAccountsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GlobalRewardPoolAccountsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GlobalRewardPoolAccountsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAsset();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string asset = 1;
 * @return {string}
 */
proto.datanode.api.v1.GlobalRewardPoolAccountsRequest.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.GlobalRewardPoolAccountsRequest} returns this
 */
proto.datanode.api.v1.GlobalRewardPoolAccountsRequest.prototype.setAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.GlobalRewardPoolAccountsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GlobalRewardPoolAccountsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GlobalRewardPoolAccountsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GlobalRewardPoolAccountsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GlobalRewardPoolAccountsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountsList: jspb.Message.toObjectList(msg.getAccountsList(),
    vega_vega_pb.Account.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GlobalRewardPoolAccountsResponse}
 */
proto.datanode.api.v1.GlobalRewardPoolAccountsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GlobalRewardPoolAccountsResponse;
  return proto.datanode.api.v1.GlobalRewardPoolAccountsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GlobalRewardPoolAccountsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GlobalRewardPoolAccountsResponse}
 */
proto.datanode.api.v1.GlobalRewardPoolAccountsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Account;
      reader.readMessage(value,vega_vega_pb.Account.deserializeBinaryFromReader);
      msg.addAccounts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GlobalRewardPoolAccountsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GlobalRewardPoolAccountsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GlobalRewardPoolAccountsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GlobalRewardPoolAccountsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_vega_pb.Account.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Account accounts = 1;
 * @return {!Array<!proto.vega.Account>}
 */
proto.datanode.api.v1.GlobalRewardPoolAccountsResponse.prototype.getAccountsList = function() {
  return /** @type{!Array<!proto.vega.Account>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.Account, 1));
};


/**
 * @param {!Array<!proto.vega.Account>} value
 * @return {!proto.datanode.api.v1.GlobalRewardPoolAccountsResponse} returns this
*/
proto.datanode.api.v1.GlobalRewardPoolAccountsResponse.prototype.setAccountsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Account=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Account}
 */
proto.datanode.api.v1.GlobalRewardPoolAccountsResponse.prototype.addAccounts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Account, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.GlobalRewardPoolAccountsResponse} returns this
 */
proto.datanode.api.v1.GlobalRewardPoolAccountsResponse.prototype.clearAccountsList = function() {
  return this.setAccountsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.OrderByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.OrderByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.OrderByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OrderByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.OrderByIDRequest}
 */
proto.datanode.api.v1.OrderByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.OrderByIDRequest;
  return proto.datanode.api.v1.OrderByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.OrderByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.OrderByIDRequest}
 */
proto.datanode.api.v1.OrderByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.OrderByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.OrderByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.OrderByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OrderByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional string order_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.OrderByIDRequest.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.OrderByIDRequest} returns this
 */
proto.datanode.api.v1.OrderByIDRequest.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 version = 2;
 * @return {number}
 */
proto.datanode.api.v1.OrderByIDRequest.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.datanode.api.v1.OrderByIDRequest} returns this
 */
proto.datanode.api.v1.OrderByIDRequest.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.OrderByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.OrderByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.OrderByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OrderByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    order: (f = msg.getOrder()) && vega_vega_pb.Order.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.OrderByIDResponse}
 */
proto.datanode.api.v1.OrderByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.OrderByIDResponse;
  return proto.datanode.api.v1.OrderByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.OrderByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.OrderByIDResponse}
 */
proto.datanode.api.v1.OrderByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Order;
      reader.readMessage(value,vega_vega_pb.Order.deserializeBinaryFromReader);
      msg.setOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.OrderByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.OrderByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.OrderByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OrderByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_vega_pb.Order.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.Order order = 1;
 * @return {?proto.vega.Order}
 */
proto.datanode.api.v1.OrderByIDResponse.prototype.getOrder = function() {
  return /** @type{?proto.vega.Order} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.Order, 1));
};


/**
 * @param {?proto.vega.Order|undefined} value
 * @return {!proto.datanode.api.v1.OrderByIDResponse} returns this
*/
proto.datanode.api.v1.OrderByIDResponse.prototype.setOrder = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.OrderByIDResponse} returns this
 */
proto.datanode.api.v1.OrderByIDResponse.prototype.clearOrder = function() {
  return this.setOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.OrderByIDResponse.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.OrderVersionsByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.OrderVersionsByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.OrderVersionsByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OrderVersionsByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pagination: (f = msg.getPagination()) && proto.datanode.api.v1.Pagination.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.OrderVersionsByIDRequest}
 */
proto.datanode.api.v1.OrderVersionsByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.OrderVersionsByIDRequest;
  return proto.datanode.api.v1.OrderVersionsByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.OrderVersionsByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.OrderVersionsByIDRequest}
 */
proto.datanode.api.v1.OrderVersionsByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderId(value);
      break;
    case 2:
      var value = new proto.datanode.api.v1.Pagination;
      reader.readMessage(value,proto.datanode.api.v1.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.OrderVersionsByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.OrderVersionsByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.OrderVersionsByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OrderVersionsByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.datanode.api.v1.Pagination.serializeBinaryToWriter
    );
  }
};


/**
 * optional string order_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.OrderVersionsByIDRequest.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.OrderVersionsByIDRequest} returns this
 */
proto.datanode.api.v1.OrderVersionsByIDRequest.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Pagination pagination = 2;
 * @return {?proto.datanode.api.v1.Pagination}
 */
proto.datanode.api.v1.OrderVersionsByIDRequest.prototype.getPagination = function() {
  return /** @type{?proto.datanode.api.v1.Pagination} */ (
    jspb.Message.getWrapperField(this, proto.datanode.api.v1.Pagination, 2));
};


/**
 * @param {?proto.datanode.api.v1.Pagination|undefined} value
 * @return {!proto.datanode.api.v1.OrderVersionsByIDRequest} returns this
*/
proto.datanode.api.v1.OrderVersionsByIDRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.OrderVersionsByIDRequest} returns this
 */
proto.datanode.api.v1.OrderVersionsByIDRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.OrderVersionsByIDRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.OrderVersionsByIDResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.OrderVersionsByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.OrderVersionsByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.OrderVersionsByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OrderVersionsByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ordersList: jspb.Message.toObjectList(msg.getOrdersList(),
    vega_vega_pb.Order.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.OrderVersionsByIDResponse}
 */
proto.datanode.api.v1.OrderVersionsByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.OrderVersionsByIDResponse;
  return proto.datanode.api.v1.OrderVersionsByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.OrderVersionsByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.OrderVersionsByIDResponse}
 */
proto.datanode.api.v1.OrderVersionsByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Order;
      reader.readMessage(value,vega_vega_pb.Order.deserializeBinaryFromReader);
      msg.addOrders(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.OrderVersionsByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.OrderVersionsByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.OrderVersionsByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OrderVersionsByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_vega_pb.Order.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Order orders = 1;
 * @return {!Array<!proto.vega.Order>}
 */
proto.datanode.api.v1.OrderVersionsByIDResponse.prototype.getOrdersList = function() {
  return /** @type{!Array<!proto.vega.Order>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.Order, 1));
};


/**
 * @param {!Array<!proto.vega.Order>} value
 * @return {!proto.datanode.api.v1.OrderVersionsByIDResponse} returns this
*/
proto.datanode.api.v1.OrderVersionsByIDResponse.prototype.setOrdersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Order=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Order}
 */
proto.datanode.api.v1.OrderVersionsByIDResponse.prototype.addOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Order, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.OrderVersionsByIDResponse} returns this
 */
proto.datanode.api.v1.OrderVersionsByIDResponse.prototype.clearOrdersList = function() {
  return this.setOrdersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.EstimateFeeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.EstimateFeeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.EstimateFeeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.EstimateFeeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    order: (f = msg.getOrder()) && vega_vega_pb.Order.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.EstimateFeeRequest}
 */
proto.datanode.api.v1.EstimateFeeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.EstimateFeeRequest;
  return proto.datanode.api.v1.EstimateFeeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.EstimateFeeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.EstimateFeeRequest}
 */
proto.datanode.api.v1.EstimateFeeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Order;
      reader.readMessage(value,vega_vega_pb.Order.deserializeBinaryFromReader);
      msg.setOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.EstimateFeeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.EstimateFeeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.EstimateFeeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.EstimateFeeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_vega_pb.Order.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.Order order = 1;
 * @return {?proto.vega.Order}
 */
proto.datanode.api.v1.EstimateFeeRequest.prototype.getOrder = function() {
  return /** @type{?proto.vega.Order} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.Order, 1));
};


/**
 * @param {?proto.vega.Order|undefined} value
 * @return {!proto.datanode.api.v1.EstimateFeeRequest} returns this
*/
proto.datanode.api.v1.EstimateFeeRequest.prototype.setOrder = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.EstimateFeeRequest} returns this
 */
proto.datanode.api.v1.EstimateFeeRequest.prototype.clearOrder = function() {
  return this.setOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.EstimateFeeRequest.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.EstimateFeeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.EstimateFeeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.EstimateFeeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.EstimateFeeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    fee: (f = msg.getFee()) && vega_vega_pb.Fee.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.EstimateFeeResponse}
 */
proto.datanode.api.v1.EstimateFeeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.EstimateFeeResponse;
  return proto.datanode.api.v1.EstimateFeeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.EstimateFeeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.EstimateFeeResponse}
 */
proto.datanode.api.v1.EstimateFeeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new vega_vega_pb.Fee;
      reader.readMessage(value,vega_vega_pb.Fee.deserializeBinaryFromReader);
      msg.setFee(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.EstimateFeeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.EstimateFeeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.EstimateFeeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.EstimateFeeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFee();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      vega_vega_pb.Fee.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.Fee fee = 2;
 * @return {?proto.vega.Fee}
 */
proto.datanode.api.v1.EstimateFeeResponse.prototype.getFee = function() {
  return /** @type{?proto.vega.Fee} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.Fee, 2));
};


/**
 * @param {?proto.vega.Fee|undefined} value
 * @return {!proto.datanode.api.v1.EstimateFeeResponse} returns this
*/
proto.datanode.api.v1.EstimateFeeResponse.prototype.setFee = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.EstimateFeeResponse} returns this
 */
proto.datanode.api.v1.EstimateFeeResponse.prototype.clearFee = function() {
  return this.setFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.EstimateFeeResponse.prototype.hasFee = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.EstimateMarginRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.EstimateMarginRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.EstimateMarginRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.EstimateMarginRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    order: (f = msg.getOrder()) && vega_vega_pb.Order.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.EstimateMarginRequest}
 */
proto.datanode.api.v1.EstimateMarginRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.EstimateMarginRequest;
  return proto.datanode.api.v1.EstimateMarginRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.EstimateMarginRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.EstimateMarginRequest}
 */
proto.datanode.api.v1.EstimateMarginRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Order;
      reader.readMessage(value,vega_vega_pb.Order.deserializeBinaryFromReader);
      msg.setOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.EstimateMarginRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.EstimateMarginRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.EstimateMarginRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.EstimateMarginRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_vega_pb.Order.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.Order order = 1;
 * @return {?proto.vega.Order}
 */
proto.datanode.api.v1.EstimateMarginRequest.prototype.getOrder = function() {
  return /** @type{?proto.vega.Order} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.Order, 1));
};


/**
 * @param {?proto.vega.Order|undefined} value
 * @return {!proto.datanode.api.v1.EstimateMarginRequest} returns this
*/
proto.datanode.api.v1.EstimateMarginRequest.prototype.setOrder = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.EstimateMarginRequest} returns this
 */
proto.datanode.api.v1.EstimateMarginRequest.prototype.clearOrder = function() {
  return this.setOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.EstimateMarginRequest.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.EstimateMarginResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.EstimateMarginResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.EstimateMarginResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.EstimateMarginResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    marginLevels: (f = msg.getMarginLevels()) && vega_vega_pb.MarginLevels.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.EstimateMarginResponse}
 */
proto.datanode.api.v1.EstimateMarginResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.EstimateMarginResponse;
  return proto.datanode.api.v1.EstimateMarginResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.EstimateMarginResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.EstimateMarginResponse}
 */
proto.datanode.api.v1.EstimateMarginResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new vega_vega_pb.MarginLevels;
      reader.readMessage(value,vega_vega_pb.MarginLevels.deserializeBinaryFromReader);
      msg.setMarginLevels(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.EstimateMarginResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.EstimateMarginResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.EstimateMarginResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.EstimateMarginResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarginLevels();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      vega_vega_pb.MarginLevels.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.MarginLevels margin_levels = 2;
 * @return {?proto.vega.MarginLevels}
 */
proto.datanode.api.v1.EstimateMarginResponse.prototype.getMarginLevels = function() {
  return /** @type{?proto.vega.MarginLevels} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.MarginLevels, 2));
};


/**
 * @param {?proto.vega.MarginLevels|undefined} value
 * @return {!proto.datanode.api.v1.EstimateMarginResponse} returns this
*/
proto.datanode.api.v1.EstimateMarginResponse.prototype.setMarginLevels = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.EstimateMarginResponse} returns this
 */
proto.datanode.api.v1.EstimateMarginResponse.prototype.clearMarginLevels = function() {
  return this.setMarginLevels(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.EstimateMarginResponse.prototype.hasMarginLevels = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.ObserveEventBusRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.ObserveEventBusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.ObserveEventBusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.ObserveEventBusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.ObserveEventBusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    typeList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    marketId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    partyId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    batchSize: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.ObserveEventBusRequest}
 */
proto.datanode.api.v1.ObserveEventBusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.ObserveEventBusRequest;
  return proto.datanode.api.v1.ObserveEventBusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.ObserveEventBusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.ObserveEventBusRequest}
 */
proto.datanode.api.v1.ObserveEventBusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.vega.events.v1.BusEventType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addType(values[i]);
      }
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBatchSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.ObserveEventBusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.ObserveEventBusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.ObserveEventBusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.ObserveEventBusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTypeList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPartyId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBatchSize();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * repeated vega.events.v1.BusEventType type = 1;
 * @return {!Array<!proto.vega.events.v1.BusEventType>}
 */
proto.datanode.api.v1.ObserveEventBusRequest.prototype.getTypeList = function() {
  return /** @type {!Array<!proto.vega.events.v1.BusEventType>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.vega.events.v1.BusEventType>} value
 * @return {!proto.datanode.api.v1.ObserveEventBusRequest} returns this
 */
proto.datanode.api.v1.ObserveEventBusRequest.prototype.setTypeList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.vega.events.v1.BusEventType} value
 * @param {number=} opt_index
 * @return {!proto.datanode.api.v1.ObserveEventBusRequest} returns this
 */
proto.datanode.api.v1.ObserveEventBusRequest.prototype.addType = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.ObserveEventBusRequest} returns this
 */
proto.datanode.api.v1.ObserveEventBusRequest.prototype.clearTypeList = function() {
  return this.setTypeList([]);
};


/**
 * optional string market_id = 2;
 * @return {string}
 */
proto.datanode.api.v1.ObserveEventBusRequest.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.ObserveEventBusRequest} returns this
 */
proto.datanode.api.v1.ObserveEventBusRequest.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string party_id = 3;
 * @return {string}
 */
proto.datanode.api.v1.ObserveEventBusRequest.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.ObserveEventBusRequest} returns this
 */
proto.datanode.api.v1.ObserveEventBusRequest.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 batch_size = 4;
 * @return {number}
 */
proto.datanode.api.v1.ObserveEventBusRequest.prototype.getBatchSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.datanode.api.v1.ObserveEventBusRequest} returns this
 */
proto.datanode.api.v1.ObserveEventBusRequest.prototype.setBatchSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.ObserveEventBusResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.ObserveEventBusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.ObserveEventBusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.ObserveEventBusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.ObserveEventBusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    vega_events_v1_events_pb.BusEvent.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.ObserveEventBusResponse}
 */
proto.datanode.api.v1.ObserveEventBusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.ObserveEventBusResponse;
  return proto.datanode.api.v1.ObserveEventBusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.ObserveEventBusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.ObserveEventBusResponse}
 */
proto.datanode.api.v1.ObserveEventBusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_events_v1_events_pb.BusEvent;
      reader.readMessage(value,vega_events_v1_events_pb.BusEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.ObserveEventBusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.ObserveEventBusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.ObserveEventBusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.ObserveEventBusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_events_v1_events_pb.BusEvent.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.events.v1.BusEvent events = 1;
 * @return {!Array<!proto.vega.events.v1.BusEvent>}
 */
proto.datanode.api.v1.ObserveEventBusResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.vega.events.v1.BusEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_events_v1_events_pb.BusEvent, 1));
};


/**
 * @param {!Array<!proto.vega.events.v1.BusEvent>} value
 * @return {!proto.datanode.api.v1.ObserveEventBusResponse} returns this
*/
proto.datanode.api.v1.ObserveEventBusResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.events.v1.BusEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.events.v1.BusEvent}
 */
proto.datanode.api.v1.ObserveEventBusResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.events.v1.BusEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.ObserveEventBusResponse} returns this
 */
proto.datanode.api.v1.ObserveEventBusResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.WithdrawalsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.WithdrawalsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.WithdrawalsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.WithdrawalsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.WithdrawalsRequest}
 */
proto.datanode.api.v1.WithdrawalsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.WithdrawalsRequest;
  return proto.datanode.api.v1.WithdrawalsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.WithdrawalsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.WithdrawalsRequest}
 */
proto.datanode.api.v1.WithdrawalsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.WithdrawalsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.WithdrawalsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.WithdrawalsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.WithdrawalsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string party_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.WithdrawalsRequest.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.WithdrawalsRequest} returns this
 */
proto.datanode.api.v1.WithdrawalsRequest.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.WithdrawalsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.WithdrawalsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.WithdrawalsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.WithdrawalsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.WithdrawalsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    withdrawalsList: jspb.Message.toObjectList(msg.getWithdrawalsList(),
    vega_vega_pb.Withdrawal.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.WithdrawalsResponse}
 */
proto.datanode.api.v1.WithdrawalsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.WithdrawalsResponse;
  return proto.datanode.api.v1.WithdrawalsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.WithdrawalsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.WithdrawalsResponse}
 */
proto.datanode.api.v1.WithdrawalsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Withdrawal;
      reader.readMessage(value,vega_vega_pb.Withdrawal.deserializeBinaryFromReader);
      msg.addWithdrawals(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.WithdrawalsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.WithdrawalsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.WithdrawalsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.WithdrawalsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWithdrawalsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_vega_pb.Withdrawal.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Withdrawal withdrawals = 1;
 * @return {!Array<!proto.vega.Withdrawal>}
 */
proto.datanode.api.v1.WithdrawalsResponse.prototype.getWithdrawalsList = function() {
  return /** @type{!Array<!proto.vega.Withdrawal>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.Withdrawal, 1));
};


/**
 * @param {!Array<!proto.vega.Withdrawal>} value
 * @return {!proto.datanode.api.v1.WithdrawalsResponse} returns this
*/
proto.datanode.api.v1.WithdrawalsResponse.prototype.setWithdrawalsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Withdrawal=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Withdrawal}
 */
proto.datanode.api.v1.WithdrawalsResponse.prototype.addWithdrawals = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Withdrawal, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.WithdrawalsResponse} returns this
 */
proto.datanode.api.v1.WithdrawalsResponse.prototype.clearWithdrawalsList = function() {
  return this.setWithdrawalsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.WithdrawalRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.WithdrawalRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.WithdrawalRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.WithdrawalRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.WithdrawalRequest}
 */
proto.datanode.api.v1.WithdrawalRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.WithdrawalRequest;
  return proto.datanode.api.v1.WithdrawalRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.WithdrawalRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.WithdrawalRequest}
 */
proto.datanode.api.v1.WithdrawalRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.WithdrawalRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.WithdrawalRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.WithdrawalRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.WithdrawalRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.datanode.api.v1.WithdrawalRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.WithdrawalRequest} returns this
 */
proto.datanode.api.v1.WithdrawalRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.WithdrawalResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.WithdrawalResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.WithdrawalResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.WithdrawalResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    withdrawal: (f = msg.getWithdrawal()) && vega_vega_pb.Withdrawal.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.WithdrawalResponse}
 */
proto.datanode.api.v1.WithdrawalResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.WithdrawalResponse;
  return proto.datanode.api.v1.WithdrawalResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.WithdrawalResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.WithdrawalResponse}
 */
proto.datanode.api.v1.WithdrawalResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Withdrawal;
      reader.readMessage(value,vega_vega_pb.Withdrawal.deserializeBinaryFromReader);
      msg.setWithdrawal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.WithdrawalResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.WithdrawalResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.WithdrawalResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.WithdrawalResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWithdrawal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_vega_pb.Withdrawal.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.Withdrawal withdrawal = 1;
 * @return {?proto.vega.Withdrawal}
 */
proto.datanode.api.v1.WithdrawalResponse.prototype.getWithdrawal = function() {
  return /** @type{?proto.vega.Withdrawal} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.Withdrawal, 1));
};


/**
 * @param {?proto.vega.Withdrawal|undefined} value
 * @return {!proto.datanode.api.v1.WithdrawalResponse} returns this
*/
proto.datanode.api.v1.WithdrawalResponse.prototype.setWithdrawal = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.WithdrawalResponse} returns this
 */
proto.datanode.api.v1.WithdrawalResponse.prototype.clearWithdrawal = function() {
  return this.setWithdrawal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.WithdrawalResponse.prototype.hasWithdrawal = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.ERC20WithdrawalApprovalRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.ERC20WithdrawalApprovalRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.ERC20WithdrawalApprovalRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.ERC20WithdrawalApprovalRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    withdrawalId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.ERC20WithdrawalApprovalRequest}
 */
proto.datanode.api.v1.ERC20WithdrawalApprovalRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.ERC20WithdrawalApprovalRequest;
  return proto.datanode.api.v1.ERC20WithdrawalApprovalRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.ERC20WithdrawalApprovalRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.ERC20WithdrawalApprovalRequest}
 */
proto.datanode.api.v1.ERC20WithdrawalApprovalRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWithdrawalId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.ERC20WithdrawalApprovalRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.ERC20WithdrawalApprovalRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.ERC20WithdrawalApprovalRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.ERC20WithdrawalApprovalRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWithdrawalId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string withdrawal_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.ERC20WithdrawalApprovalRequest.prototype.getWithdrawalId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.ERC20WithdrawalApprovalRequest} returns this
 */
proto.datanode.api.v1.ERC20WithdrawalApprovalRequest.prototype.setWithdrawalId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.ERC20WithdrawalApprovalResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.ERC20WithdrawalApprovalResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.ERC20WithdrawalApprovalResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.ERC20WithdrawalApprovalResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetSource: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 2, ""),
    expiry: jspb.Message.getFieldWithDefault(msg, 3, 0),
    nonce: jspb.Message.getFieldWithDefault(msg, 4, ""),
    signatures: jspb.Message.getFieldWithDefault(msg, 5, ""),
    targetAddress: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.ERC20WithdrawalApprovalResponse}
 */
proto.datanode.api.v1.ERC20WithdrawalApprovalResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.ERC20WithdrawalApprovalResponse;
  return proto.datanode.api.v1.ERC20WithdrawalApprovalResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.ERC20WithdrawalApprovalResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.ERC20WithdrawalApprovalResponse}
 */
proto.datanode.api.v1.ERC20WithdrawalApprovalResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAssetSource(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpiry(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNonce(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignatures(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.ERC20WithdrawalApprovalResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.ERC20WithdrawalApprovalResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.ERC20WithdrawalApprovalResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.ERC20WithdrawalApprovalResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetSource();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getExpiry();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getNonce();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSignatures();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTargetAddress();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string asset_source = 1;
 * @return {string}
 */
proto.datanode.api.v1.ERC20WithdrawalApprovalResponse.prototype.getAssetSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.ERC20WithdrawalApprovalResponse} returns this
 */
proto.datanode.api.v1.ERC20WithdrawalApprovalResponse.prototype.setAssetSource = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string amount = 2;
 * @return {string}
 */
proto.datanode.api.v1.ERC20WithdrawalApprovalResponse.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.ERC20WithdrawalApprovalResponse} returns this
 */
proto.datanode.api.v1.ERC20WithdrawalApprovalResponse.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 expiry = 3;
 * @return {number}
 */
proto.datanode.api.v1.ERC20WithdrawalApprovalResponse.prototype.getExpiry = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.datanode.api.v1.ERC20WithdrawalApprovalResponse} returns this
 */
proto.datanode.api.v1.ERC20WithdrawalApprovalResponse.prototype.setExpiry = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string nonce = 4;
 * @return {string}
 */
proto.datanode.api.v1.ERC20WithdrawalApprovalResponse.prototype.getNonce = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.ERC20WithdrawalApprovalResponse} returns this
 */
proto.datanode.api.v1.ERC20WithdrawalApprovalResponse.prototype.setNonce = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string signatures = 5;
 * @return {string}
 */
proto.datanode.api.v1.ERC20WithdrawalApprovalResponse.prototype.getSignatures = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.ERC20WithdrawalApprovalResponse} returns this
 */
proto.datanode.api.v1.ERC20WithdrawalApprovalResponse.prototype.setSignatures = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string target_address = 6;
 * @return {string}
 */
proto.datanode.api.v1.ERC20WithdrawalApprovalResponse.prototype.getTargetAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.ERC20WithdrawalApprovalResponse} returns this
 */
proto.datanode.api.v1.ERC20WithdrawalApprovalResponse.prototype.setTargetAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.DepositsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.DepositsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.DepositsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.DepositsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.DepositsRequest}
 */
proto.datanode.api.v1.DepositsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.DepositsRequest;
  return proto.datanode.api.v1.DepositsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.DepositsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.DepositsRequest}
 */
proto.datanode.api.v1.DepositsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.DepositsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.DepositsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.DepositsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.DepositsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string party_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.DepositsRequest.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.DepositsRequest} returns this
 */
proto.datanode.api.v1.DepositsRequest.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.DepositsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.DepositsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.DepositsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.DepositsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.DepositsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    depositsList: jspb.Message.toObjectList(msg.getDepositsList(),
    vega_vega_pb.Deposit.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.DepositsResponse}
 */
proto.datanode.api.v1.DepositsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.DepositsResponse;
  return proto.datanode.api.v1.DepositsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.DepositsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.DepositsResponse}
 */
proto.datanode.api.v1.DepositsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Deposit;
      reader.readMessage(value,vega_vega_pb.Deposit.deserializeBinaryFromReader);
      msg.addDeposits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.DepositsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.DepositsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.DepositsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.DepositsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDepositsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_vega_pb.Deposit.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Deposit deposits = 1;
 * @return {!Array<!proto.vega.Deposit>}
 */
proto.datanode.api.v1.DepositsResponse.prototype.getDepositsList = function() {
  return /** @type{!Array<!proto.vega.Deposit>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.Deposit, 1));
};


/**
 * @param {!Array<!proto.vega.Deposit>} value
 * @return {!proto.datanode.api.v1.DepositsResponse} returns this
*/
proto.datanode.api.v1.DepositsResponse.prototype.setDepositsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Deposit=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Deposit}
 */
proto.datanode.api.v1.DepositsResponse.prototype.addDeposits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Deposit, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.DepositsResponse} returns this
 */
proto.datanode.api.v1.DepositsResponse.prototype.clearDepositsList = function() {
  return this.setDepositsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.DepositRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.DepositRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.DepositRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.DepositRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.DepositRequest}
 */
proto.datanode.api.v1.DepositRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.DepositRequest;
  return proto.datanode.api.v1.DepositRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.DepositRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.DepositRequest}
 */
proto.datanode.api.v1.DepositRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.DepositRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.DepositRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.DepositRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.DepositRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.datanode.api.v1.DepositRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.DepositRequest} returns this
 */
proto.datanode.api.v1.DepositRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.DepositResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.DepositResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.DepositResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.DepositResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    deposit: (f = msg.getDeposit()) && vega_vega_pb.Deposit.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.DepositResponse}
 */
proto.datanode.api.v1.DepositResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.DepositResponse;
  return proto.datanode.api.v1.DepositResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.DepositResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.DepositResponse}
 */
proto.datanode.api.v1.DepositResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Deposit;
      reader.readMessage(value,vega_vega_pb.Deposit.deserializeBinaryFromReader);
      msg.setDeposit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.DepositResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.DepositResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.DepositResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.DepositResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeposit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_vega_pb.Deposit.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.Deposit deposit = 1;
 * @return {?proto.vega.Deposit}
 */
proto.datanode.api.v1.DepositResponse.prototype.getDeposit = function() {
  return /** @type{?proto.vega.Deposit} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.Deposit, 1));
};


/**
 * @param {?proto.vega.Deposit|undefined} value
 * @return {!proto.datanode.api.v1.DepositResponse} returns this
*/
proto.datanode.api.v1.DepositResponse.prototype.setDeposit = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.DepositResponse} returns this
 */
proto.datanode.api.v1.DepositResponse.prototype.clearDeposit = function() {
  return this.setDeposit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.DepositResponse.prototype.hasDeposit = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.NetworkParametersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.NetworkParametersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.NetworkParametersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.NetworkParametersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.NetworkParametersRequest}
 */
proto.datanode.api.v1.NetworkParametersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.NetworkParametersRequest;
  return proto.datanode.api.v1.NetworkParametersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.NetworkParametersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.NetworkParametersRequest}
 */
proto.datanode.api.v1.NetworkParametersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.NetworkParametersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.NetworkParametersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.NetworkParametersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.NetworkParametersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.NetworkParametersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.NetworkParametersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.NetworkParametersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.NetworkParametersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.NetworkParametersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    networkParametersList: jspb.Message.toObjectList(msg.getNetworkParametersList(),
    vega_vega_pb.NetworkParameter.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.NetworkParametersResponse}
 */
proto.datanode.api.v1.NetworkParametersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.NetworkParametersResponse;
  return proto.datanode.api.v1.NetworkParametersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.NetworkParametersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.NetworkParametersResponse}
 */
proto.datanode.api.v1.NetworkParametersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.NetworkParameter;
      reader.readMessage(value,vega_vega_pb.NetworkParameter.deserializeBinaryFromReader);
      msg.addNetworkParameters(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.NetworkParametersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.NetworkParametersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.NetworkParametersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.NetworkParametersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNetworkParametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_vega_pb.NetworkParameter.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.NetworkParameter network_parameters = 1;
 * @return {!Array<!proto.vega.NetworkParameter>}
 */
proto.datanode.api.v1.NetworkParametersResponse.prototype.getNetworkParametersList = function() {
  return /** @type{!Array<!proto.vega.NetworkParameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.NetworkParameter, 1));
};


/**
 * @param {!Array<!proto.vega.NetworkParameter>} value
 * @return {!proto.datanode.api.v1.NetworkParametersResponse} returns this
*/
proto.datanode.api.v1.NetworkParametersResponse.prototype.setNetworkParametersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.NetworkParameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.NetworkParameter}
 */
proto.datanode.api.v1.NetworkParametersResponse.prototype.addNetworkParameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.NetworkParameter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.NetworkParametersResponse} returns this
 */
proto.datanode.api.v1.NetworkParametersResponse.prototype.clearNetworkParametersList = function() {
  return this.setNetworkParametersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.LiquidityProvisionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.LiquidityProvisionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.LiquidityProvisionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.LiquidityProvisionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: jspb.Message.getFieldWithDefault(msg, 1, ""),
    party: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.LiquidityProvisionsRequest}
 */
proto.datanode.api.v1.LiquidityProvisionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.LiquidityProvisionsRequest;
  return proto.datanode.api.v1.LiquidityProvisionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.LiquidityProvisionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.LiquidityProvisionsRequest}
 */
proto.datanode.api.v1.LiquidityProvisionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParty(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.LiquidityProvisionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.LiquidityProvisionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.LiquidityProvisionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.LiquidityProvisionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParty();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string market = 1;
 * @return {string}
 */
proto.datanode.api.v1.LiquidityProvisionsRequest.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.LiquidityProvisionsRequest} returns this
 */
proto.datanode.api.v1.LiquidityProvisionsRequest.prototype.setMarket = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string party = 2;
 * @return {string}
 */
proto.datanode.api.v1.LiquidityProvisionsRequest.prototype.getParty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.LiquidityProvisionsRequest} returns this
 */
proto.datanode.api.v1.LiquidityProvisionsRequest.prototype.setParty = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.LiquidityProvisionsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.LiquidityProvisionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.LiquidityProvisionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.LiquidityProvisionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.LiquidityProvisionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    liquidityProvisionsList: jspb.Message.toObjectList(msg.getLiquidityProvisionsList(),
    vega_vega_pb.LiquidityProvision.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.LiquidityProvisionsResponse}
 */
proto.datanode.api.v1.LiquidityProvisionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.LiquidityProvisionsResponse;
  return proto.datanode.api.v1.LiquidityProvisionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.LiquidityProvisionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.LiquidityProvisionsResponse}
 */
proto.datanode.api.v1.LiquidityProvisionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.LiquidityProvision;
      reader.readMessage(value,vega_vega_pb.LiquidityProvision.deserializeBinaryFromReader);
      msg.addLiquidityProvisions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.LiquidityProvisionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.LiquidityProvisionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.LiquidityProvisionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.LiquidityProvisionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLiquidityProvisionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_vega_pb.LiquidityProvision.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.LiquidityProvision liquidity_provisions = 1;
 * @return {!Array<!proto.vega.LiquidityProvision>}
 */
proto.datanode.api.v1.LiquidityProvisionsResponse.prototype.getLiquidityProvisionsList = function() {
  return /** @type{!Array<!proto.vega.LiquidityProvision>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.LiquidityProvision, 1));
};


/**
 * @param {!Array<!proto.vega.LiquidityProvision>} value
 * @return {!proto.datanode.api.v1.LiquidityProvisionsResponse} returns this
*/
proto.datanode.api.v1.LiquidityProvisionsResponse.prototype.setLiquidityProvisionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.LiquidityProvision=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.LiquidityProvision}
 */
proto.datanode.api.v1.LiquidityProvisionsResponse.prototype.addLiquidityProvisions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.LiquidityProvision, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.LiquidityProvisionsResponse} returns this
 */
proto.datanode.api.v1.LiquidityProvisionsResponse.prototype.clearLiquidityProvisionsList = function() {
  return this.setLiquidityProvisionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.OracleSpecRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.OracleSpecRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.OracleSpecRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OracleSpecRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.OracleSpecRequest}
 */
proto.datanode.api.v1.OracleSpecRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.OracleSpecRequest;
  return proto.datanode.api.v1.OracleSpecRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.OracleSpecRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.OracleSpecRequest}
 */
proto.datanode.api.v1.OracleSpecRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.OracleSpecRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.OracleSpecRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.OracleSpecRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OracleSpecRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.datanode.api.v1.OracleSpecRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.OracleSpecRequest} returns this
 */
proto.datanode.api.v1.OracleSpecRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.OracleSpecResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.OracleSpecResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.OracleSpecResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OracleSpecResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    oracleSpec: (f = msg.getOracleSpec()) && vega_oracles_v1_spec_pb.OracleSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.OracleSpecResponse}
 */
proto.datanode.api.v1.OracleSpecResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.OracleSpecResponse;
  return proto.datanode.api.v1.OracleSpecResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.OracleSpecResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.OracleSpecResponse}
 */
proto.datanode.api.v1.OracleSpecResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_oracles_v1_spec_pb.OracleSpec;
      reader.readMessage(value,vega_oracles_v1_spec_pb.OracleSpec.deserializeBinaryFromReader);
      msg.setOracleSpec(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.OracleSpecResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.OracleSpecResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.OracleSpecResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OracleSpecResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOracleSpec();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_oracles_v1_spec_pb.OracleSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional oracles.v1.OracleSpec oracle_spec = 1;
 * @return {?proto.oracles.v1.OracleSpec}
 */
proto.datanode.api.v1.OracleSpecResponse.prototype.getOracleSpec = function() {
  return /** @type{?proto.oracles.v1.OracleSpec} */ (
    jspb.Message.getWrapperField(this, vega_oracles_v1_spec_pb.OracleSpec, 1));
};


/**
 * @param {?proto.oracles.v1.OracleSpec|undefined} value
 * @return {!proto.datanode.api.v1.OracleSpecResponse} returns this
*/
proto.datanode.api.v1.OracleSpecResponse.prototype.setOracleSpec = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.OracleSpecResponse} returns this
 */
proto.datanode.api.v1.OracleSpecResponse.prototype.clearOracleSpec = function() {
  return this.setOracleSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.OracleSpecResponse.prototype.hasOracleSpec = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.OracleSpecsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.OracleSpecsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.OracleSpecsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OracleSpecsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.OracleSpecsRequest}
 */
proto.datanode.api.v1.OracleSpecsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.OracleSpecsRequest;
  return proto.datanode.api.v1.OracleSpecsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.OracleSpecsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.OracleSpecsRequest}
 */
proto.datanode.api.v1.OracleSpecsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.OracleSpecsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.OracleSpecsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.OracleSpecsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OracleSpecsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.OracleSpecsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.OracleSpecsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.OracleSpecsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.OracleSpecsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OracleSpecsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    oracleSpecsList: jspb.Message.toObjectList(msg.getOracleSpecsList(),
    vega_oracles_v1_spec_pb.OracleSpec.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.OracleSpecsResponse}
 */
proto.datanode.api.v1.OracleSpecsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.OracleSpecsResponse;
  return proto.datanode.api.v1.OracleSpecsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.OracleSpecsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.OracleSpecsResponse}
 */
proto.datanode.api.v1.OracleSpecsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_oracles_v1_spec_pb.OracleSpec;
      reader.readMessage(value,vega_oracles_v1_spec_pb.OracleSpec.deserializeBinaryFromReader);
      msg.addOracleSpecs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.OracleSpecsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.OracleSpecsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.OracleSpecsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OracleSpecsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOracleSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_oracles_v1_spec_pb.OracleSpec.serializeBinaryToWriter
    );
  }
};


/**
 * repeated oracles.v1.OracleSpec oracle_specs = 1;
 * @return {!Array<!proto.oracles.v1.OracleSpec>}
 */
proto.datanode.api.v1.OracleSpecsResponse.prototype.getOracleSpecsList = function() {
  return /** @type{!Array<!proto.oracles.v1.OracleSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_oracles_v1_spec_pb.OracleSpec, 1));
};


/**
 * @param {!Array<!proto.oracles.v1.OracleSpec>} value
 * @return {!proto.datanode.api.v1.OracleSpecsResponse} returns this
*/
proto.datanode.api.v1.OracleSpecsResponse.prototype.setOracleSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.oracles.v1.OracleSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.oracles.v1.OracleSpec}
 */
proto.datanode.api.v1.OracleSpecsResponse.prototype.addOracleSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.oracles.v1.OracleSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.OracleSpecsResponse} returns this
 */
proto.datanode.api.v1.OracleSpecsResponse.prototype.clearOracleSpecsList = function() {
  return this.setOracleSpecsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.OracleDataBySpecRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.OracleDataBySpecRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.OracleDataBySpecRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OracleDataBySpecRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.OracleDataBySpecRequest}
 */
proto.datanode.api.v1.OracleDataBySpecRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.OracleDataBySpecRequest;
  return proto.datanode.api.v1.OracleDataBySpecRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.OracleDataBySpecRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.OracleDataBySpecRequest}
 */
proto.datanode.api.v1.OracleDataBySpecRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.OracleDataBySpecRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.OracleDataBySpecRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.OracleDataBySpecRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OracleDataBySpecRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.datanode.api.v1.OracleDataBySpecRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.OracleDataBySpecRequest} returns this
 */
proto.datanode.api.v1.OracleDataBySpecRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.OracleDataBySpecResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.OracleDataBySpecResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.OracleDataBySpecResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.OracleDataBySpecResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OracleDataBySpecResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    oracleDataList: jspb.Message.toObjectList(msg.getOracleDataList(),
    vega_oracles_v1_data_pb.OracleData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.OracleDataBySpecResponse}
 */
proto.datanode.api.v1.OracleDataBySpecResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.OracleDataBySpecResponse;
  return proto.datanode.api.v1.OracleDataBySpecResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.OracleDataBySpecResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.OracleDataBySpecResponse}
 */
proto.datanode.api.v1.OracleDataBySpecResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_oracles_v1_data_pb.OracleData;
      reader.readMessage(value,vega_oracles_v1_data_pb.OracleData.deserializeBinaryFromReader);
      msg.addOracleData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.OracleDataBySpecResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.OracleDataBySpecResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.OracleDataBySpecResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.OracleDataBySpecResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOracleDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_oracles_v1_data_pb.OracleData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated oracles.v1.OracleData oracle_data = 1;
 * @return {!Array<!proto.oracles.v1.OracleData>}
 */
proto.datanode.api.v1.OracleDataBySpecResponse.prototype.getOracleDataList = function() {
  return /** @type{!Array<!proto.oracles.v1.OracleData>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_oracles_v1_data_pb.OracleData, 1));
};


/**
 * @param {!Array<!proto.oracles.v1.OracleData>} value
 * @return {!proto.datanode.api.v1.OracleDataBySpecResponse} returns this
*/
proto.datanode.api.v1.OracleDataBySpecResponse.prototype.setOracleDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.oracles.v1.OracleData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.oracles.v1.OracleData}
 */
proto.datanode.api.v1.OracleDataBySpecResponse.prototype.addOracleData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.oracles.v1.OracleData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.OracleDataBySpecResponse} returns this
 */
proto.datanode.api.v1.OracleDataBySpecResponse.prototype.clearOracleDataList = function() {
  return this.setOracleDataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.ObserveRewardDetailsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.ObserveRewardDetailsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.ObserveRewardDetailsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.ObserveRewardDetailsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    party: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.ObserveRewardDetailsRequest}
 */
proto.datanode.api.v1.ObserveRewardDetailsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.ObserveRewardDetailsRequest;
  return proto.datanode.api.v1.ObserveRewardDetailsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.ObserveRewardDetailsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.ObserveRewardDetailsRequest}
 */
proto.datanode.api.v1.ObserveRewardDetailsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAssetId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParty(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.ObserveRewardDetailsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.ObserveRewardDetailsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.ObserveRewardDetailsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.ObserveRewardDetailsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParty();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string asset_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.ObserveRewardDetailsRequest.prototype.getAssetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.ObserveRewardDetailsRequest} returns this
 */
proto.datanode.api.v1.ObserveRewardDetailsRequest.prototype.setAssetId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string party = 2;
 * @return {string}
 */
proto.datanode.api.v1.ObserveRewardDetailsRequest.prototype.getParty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.ObserveRewardDetailsRequest} returns this
 */
proto.datanode.api.v1.ObserveRewardDetailsRequest.prototype.setParty = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.ObserveRewardDetailsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.ObserveRewardDetailsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.ObserveRewardDetailsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.ObserveRewardDetailsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rewardDetails: (f = msg.getRewardDetails()) && vega_vega_pb.RewardDetails.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.ObserveRewardDetailsResponse}
 */
proto.datanode.api.v1.ObserveRewardDetailsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.ObserveRewardDetailsResponse;
  return proto.datanode.api.v1.ObserveRewardDetailsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.ObserveRewardDetailsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.ObserveRewardDetailsResponse}
 */
proto.datanode.api.v1.ObserveRewardDetailsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.RewardDetails;
      reader.readMessage(value,vega_vega_pb.RewardDetails.deserializeBinaryFromReader);
      msg.setRewardDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.ObserveRewardDetailsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.ObserveRewardDetailsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.ObserveRewardDetailsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.ObserveRewardDetailsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRewardDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_vega_pb.RewardDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.RewardDetails reward_details = 1;
 * @return {?proto.vega.RewardDetails}
 */
proto.datanode.api.v1.ObserveRewardDetailsResponse.prototype.getRewardDetails = function() {
  return /** @type{?proto.vega.RewardDetails} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.RewardDetails, 1));
};


/**
 * @param {?proto.vega.RewardDetails|undefined} value
 * @return {!proto.datanode.api.v1.ObserveRewardDetailsResponse} returns this
*/
proto.datanode.api.v1.ObserveRewardDetailsResponse.prototype.setRewardDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datanode.api.v1.ObserveRewardDetailsResponse} returns this
 */
proto.datanode.api.v1.ObserveRewardDetailsResponse.prototype.clearRewardDetails = function() {
  return this.setRewardDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datanode.api.v1.ObserveRewardDetailsResponse.prototype.hasRewardDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetRewardDetailsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetRewardDetailsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetRewardDetailsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetRewardDetailsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetRewardDetailsRequest}
 */
proto.datanode.api.v1.GetRewardDetailsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetRewardDetailsRequest;
  return proto.datanode.api.v1.GetRewardDetailsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetRewardDetailsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetRewardDetailsRequest}
 */
proto.datanode.api.v1.GetRewardDetailsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetRewardDetailsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetRewardDetailsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetRewardDetailsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetRewardDetailsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string party_id = 1;
 * @return {string}
 */
proto.datanode.api.v1.GetRewardDetailsRequest.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.GetRewardDetailsRequest} returns this
 */
proto.datanode.api.v1.GetRewardDetailsRequest.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.GetRewardDetailsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.GetRewardDetailsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.GetRewardDetailsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.GetRewardDetailsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetRewardDetailsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rewardDetailsList: jspb.Message.toObjectList(msg.getRewardDetailsList(),
    vega_vega_pb.RewardPerAssetDetail.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.GetRewardDetailsResponse}
 */
proto.datanode.api.v1.GetRewardDetailsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.GetRewardDetailsResponse;
  return proto.datanode.api.v1.GetRewardDetailsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.GetRewardDetailsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.GetRewardDetailsResponse}
 */
proto.datanode.api.v1.GetRewardDetailsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.RewardPerAssetDetail;
      reader.readMessage(value,vega_vega_pb.RewardPerAssetDetail.deserializeBinaryFromReader);
      msg.addRewardDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.GetRewardDetailsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.GetRewardDetailsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.GetRewardDetailsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.GetRewardDetailsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRewardDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_vega_pb.RewardPerAssetDetail.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.RewardPerAssetDetail reward_details = 1;
 * @return {!Array<!proto.vega.RewardPerAssetDetail>}
 */
proto.datanode.api.v1.GetRewardDetailsResponse.prototype.getRewardDetailsList = function() {
  return /** @type{!Array<!proto.vega.RewardPerAssetDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.RewardPerAssetDetail, 1));
};


/**
 * @param {!Array<!proto.vega.RewardPerAssetDetail>} value
 * @return {!proto.datanode.api.v1.GetRewardDetailsResponse} returns this
*/
proto.datanode.api.v1.GetRewardDetailsResponse.prototype.setRewardDetailsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.RewardPerAssetDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.RewardPerAssetDetail}
 */
proto.datanode.api.v1.GetRewardDetailsResponse.prototype.addRewardDetails = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.RewardPerAssetDetail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.GetRewardDetailsResponse} returns this
 */
proto.datanode.api.v1.GetRewardDetailsResponse.prototype.clearRewardDetailsList = function() {
  return this.setRewardDetailsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.Checkpoint.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.Checkpoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.Checkpoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.Checkpoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    hash: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blockHash: jspb.Message.getFieldWithDefault(msg, 2, ""),
    atBlock: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.Checkpoint}
 */
proto.datanode.api.v1.Checkpoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.Checkpoint;
  return proto.datanode.api.v1.Checkpoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.Checkpoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.Checkpoint}
 */
proto.datanode.api.v1.Checkpoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockHash(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAtBlock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.Checkpoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.Checkpoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.Checkpoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.Checkpoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlockHash();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAtBlock();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional string hash = 1;
 * @return {string}
 */
proto.datanode.api.v1.Checkpoint.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.Checkpoint} returns this
 */
proto.datanode.api.v1.Checkpoint.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string block_hash = 2;
 * @return {string}
 */
proto.datanode.api.v1.Checkpoint.prototype.getBlockHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.datanode.api.v1.Checkpoint} returns this
 */
proto.datanode.api.v1.Checkpoint.prototype.setBlockHash = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 at_block = 3;
 * @return {number}
 */
proto.datanode.api.v1.Checkpoint.prototype.getAtBlock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.datanode.api.v1.Checkpoint} returns this
 */
proto.datanode.api.v1.Checkpoint.prototype.setAtBlock = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.CheckpointsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.CheckpointsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.CheckpointsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.CheckpointsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.CheckpointsRequest}
 */
proto.datanode.api.v1.CheckpointsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.CheckpointsRequest;
  return proto.datanode.api.v1.CheckpointsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.CheckpointsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.CheckpointsRequest}
 */
proto.datanode.api.v1.CheckpointsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.CheckpointsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.CheckpointsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.CheckpointsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.CheckpointsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.datanode.api.v1.CheckpointsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.datanode.api.v1.CheckpointsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.datanode.api.v1.CheckpointsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datanode.api.v1.CheckpointsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.CheckpointsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    checkpointsList: jspb.Message.toObjectList(msg.getCheckpointsList(),
    proto.datanode.api.v1.Checkpoint.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.datanode.api.v1.CheckpointsResponse}
 */
proto.datanode.api.v1.CheckpointsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datanode.api.v1.CheckpointsResponse;
  return proto.datanode.api.v1.CheckpointsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datanode.api.v1.CheckpointsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datanode.api.v1.CheckpointsResponse}
 */
proto.datanode.api.v1.CheckpointsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.datanode.api.v1.Checkpoint;
      reader.readMessage(value,proto.datanode.api.v1.Checkpoint.deserializeBinaryFromReader);
      msg.addCheckpoints(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.datanode.api.v1.CheckpointsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datanode.api.v1.CheckpointsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datanode.api.v1.CheckpointsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datanode.api.v1.CheckpointsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCheckpointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.datanode.api.v1.Checkpoint.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Checkpoint checkpoints = 1;
 * @return {!Array<!proto.datanode.api.v1.Checkpoint>}
 */
proto.datanode.api.v1.CheckpointsResponse.prototype.getCheckpointsList = function() {
  return /** @type{!Array<!proto.datanode.api.v1.Checkpoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.datanode.api.v1.Checkpoint, 1));
};


/**
 * @param {!Array<!proto.datanode.api.v1.Checkpoint>} value
 * @return {!proto.datanode.api.v1.CheckpointsResponse} returns this
*/
proto.datanode.api.v1.CheckpointsResponse.prototype.setCheckpointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.datanode.api.v1.Checkpoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.datanode.api.v1.Checkpoint}
 */
proto.datanode.api.v1.CheckpointsResponse.prototype.addCheckpoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.datanode.api.v1.Checkpoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.datanode.api.v1.CheckpointsResponse} returns this
 */
proto.datanode.api.v1.CheckpointsResponse.prototype.clearCheckpointsList = function() {
  return this.setCheckpointsList([]);
};


goog.object.extend(exports, proto.datanode.api.v1);
