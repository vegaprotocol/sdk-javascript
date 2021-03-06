// package: vega.api.v1
// file: vega/api/v1/corestate.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as vega_assets_pb from "../../../vega/assets_pb";
import * as vega_governance_pb from "../../../vega/governance_pb";
import * as vega_markets_pb from "../../../vega/markets_pb";
import * as vega_vega_pb from "../../../vega/vega_pb";
import * as vega_events_v1_events_pb from "../../../vega/events/v1/events_pb";

export class Account extends jspb.Message {
    getParty(): string;
    setParty(value: string): Account;
    getMarket(): string;
    setMarket(value: string): Account;
    getBalance(): string;
    setBalance(value: string): Account;
    getAsset(): string;
    setAsset(value: string): Account;
    getType(): string;
    setType(value: string): Account;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Account.AsObject;
    static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Account;
    static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
    export type AsObject = {
        party: string,
        market: string,
        balance: string,
        asset: string,
        type: string,
    }
}

export class ListAccountsRequest extends jspb.Message {
    getParty(): string;
    setParty(value: string): ListAccountsRequest;
    getMarket(): string;
    setMarket(value: string): ListAccountsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAccountsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAccountsRequest): ListAccountsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAccountsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAccountsRequest;
    static deserializeBinaryFromReader(message: ListAccountsRequest, reader: jspb.BinaryReader): ListAccountsRequest;
}

export namespace ListAccountsRequest {
    export type AsObject = {
        party: string,
        market: string,
    }
}

export class ListAccountsResponse extends jspb.Message {
    clearAccountsList(): void;
    getAccountsList(): Array<Account>;
    setAccountsList(value: Array<Account>): ListAccountsResponse;
    addAccounts(value?: Account, index?: number): Account;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAccountsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListAccountsResponse): ListAccountsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAccountsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAccountsResponse;
    static deserializeBinaryFromReader(message: ListAccountsResponse, reader: jspb.BinaryReader): ListAccountsResponse;
}

export namespace ListAccountsResponse {
    export type AsObject = {
        accountsList: Array<Account.AsObject>,
    }
}

export class ListAssetsRequest extends jspb.Message {
    getAsset(): string;
    setAsset(value: string): ListAssetsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAssetsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAssetsRequest): ListAssetsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAssetsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAssetsRequest;
    static deserializeBinaryFromReader(message: ListAssetsRequest, reader: jspb.BinaryReader): ListAssetsRequest;
}

export namespace ListAssetsRequest {
    export type AsObject = {
        asset: string,
    }
}

export class ListAssetsResponse extends jspb.Message {
    clearAssetsList(): void;
    getAssetsList(): Array<vega_assets_pb.Asset>;
    setAssetsList(value: Array<vega_assets_pb.Asset>): ListAssetsResponse;
    addAssets(value?: vega_assets_pb.Asset, index?: number): vega_assets_pb.Asset;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAssetsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListAssetsResponse): ListAssetsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAssetsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAssetsResponse;
    static deserializeBinaryFromReader(message: ListAssetsResponse, reader: jspb.BinaryReader): ListAssetsResponse;
}

export namespace ListAssetsResponse {
    export type AsObject = {
        assetsList: Array<vega_assets_pb.Asset.AsObject>,
    }
}

export class ListNetworkParametersRequest extends jspb.Message {
    getNetworkParameterKey(): string;
    setNetworkParameterKey(value: string): ListNetworkParametersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListNetworkParametersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListNetworkParametersRequest): ListNetworkParametersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListNetworkParametersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListNetworkParametersRequest;
    static deserializeBinaryFromReader(message: ListNetworkParametersRequest, reader: jspb.BinaryReader): ListNetworkParametersRequest;
}

export namespace ListNetworkParametersRequest {
    export type AsObject = {
        networkParameterKey: string,
    }
}

export class ListNetworkParametersResponse extends jspb.Message {
    clearNetworkParametersList(): void;
    getNetworkParametersList(): Array<vega_vega_pb.NetworkParameter>;
    setNetworkParametersList(value: Array<vega_vega_pb.NetworkParameter>): ListNetworkParametersResponse;
    addNetworkParameters(value?: vega_vega_pb.NetworkParameter, index?: number): vega_vega_pb.NetworkParameter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListNetworkParametersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListNetworkParametersResponse): ListNetworkParametersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListNetworkParametersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListNetworkParametersResponse;
    static deserializeBinaryFromReader(message: ListNetworkParametersResponse, reader: jspb.BinaryReader): ListNetworkParametersResponse;
}

export namespace ListNetworkParametersResponse {
    export type AsObject = {
        networkParametersList: Array<vega_vega_pb.NetworkParameter.AsObject>,
    }
}

export class ListPartiesRequest extends jspb.Message {

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPartiesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListPartiesRequest): ListPartiesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPartiesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPartiesRequest;
    static deserializeBinaryFromReader(message: ListPartiesRequest, reader: jspb.BinaryReader): ListPartiesRequest;
}

export namespace ListPartiesRequest {
    export type AsObject = {
    }
}

export class ListPartiesResponse extends jspb.Message {
    clearPartiesList(): void;
    getPartiesList(): Array<vega_vega_pb.Party>;
    setPartiesList(value: Array<vega_vega_pb.Party>): ListPartiesResponse;
    addParties(value?: vega_vega_pb.Party, index?: number): vega_vega_pb.Party;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPartiesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListPartiesResponse): ListPartiesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPartiesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPartiesResponse;
    static deserializeBinaryFromReader(message: ListPartiesResponse, reader: jspb.BinaryReader): ListPartiesResponse;
}

export namespace ListPartiesResponse {
    export type AsObject = {
        partiesList: Array<vega_vega_pb.Party.AsObject>,
    }
}

export class ListValidatorsRequest extends jspb.Message {

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListValidatorsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListValidatorsRequest): ListValidatorsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListValidatorsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListValidatorsRequest;
    static deserializeBinaryFromReader(message: ListValidatorsRequest, reader: jspb.BinaryReader): ListValidatorsRequest;
}

export namespace ListValidatorsRequest {
    export type AsObject = {
    }
}

export class ListValidatorsResponse extends jspb.Message {
    clearValidatorsList(): void;
    getValidatorsList(): Array<vega_events_v1_events_pb.ValidatorUpdate>;
    setValidatorsList(value: Array<vega_events_v1_events_pb.ValidatorUpdate>): ListValidatorsResponse;
    addValidators(value?: vega_events_v1_events_pb.ValidatorUpdate, index?: number): vega_events_v1_events_pb.ValidatorUpdate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListValidatorsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListValidatorsResponse): ListValidatorsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListValidatorsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListValidatorsResponse;
    static deserializeBinaryFromReader(message: ListValidatorsResponse, reader: jspb.BinaryReader): ListValidatorsResponse;
}

export namespace ListValidatorsResponse {
    export type AsObject = {
        validatorsList: Array<vega_events_v1_events_pb.ValidatorUpdate.AsObject>,
    }
}

export class ListMarketsRequest extends jspb.Message {
    getMarket(): string;
    setMarket(value: string): ListMarketsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListMarketsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListMarketsRequest): ListMarketsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListMarketsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListMarketsRequest;
    static deserializeBinaryFromReader(message: ListMarketsRequest, reader: jspb.BinaryReader): ListMarketsRequest;
}

export namespace ListMarketsRequest {
    export type AsObject = {
        market: string,
    }
}

export class ListMarketsResponse extends jspb.Message {
    clearMarketsList(): void;
    getMarketsList(): Array<vega_markets_pb.Market>;
    setMarketsList(value: Array<vega_markets_pb.Market>): ListMarketsResponse;
    addMarkets(value?: vega_markets_pb.Market, index?: number): vega_markets_pb.Market;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListMarketsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListMarketsResponse): ListMarketsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListMarketsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListMarketsResponse;
    static deserializeBinaryFromReader(message: ListMarketsResponse, reader: jspb.BinaryReader): ListMarketsResponse;
}

export namespace ListMarketsResponse {
    export type AsObject = {
        marketsList: Array<vega_markets_pb.Market.AsObject>,
    }
}

export class ListProposalsRequest extends jspb.Message {
    getProposal(): string;
    setProposal(value: string): ListProposalsRequest;
    getProposer(): string;
    setProposer(value: string): ListProposalsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListProposalsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListProposalsRequest): ListProposalsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListProposalsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListProposalsRequest;
    static deserializeBinaryFromReader(message: ListProposalsRequest, reader: jspb.BinaryReader): ListProposalsRequest;
}

export namespace ListProposalsRequest {
    export type AsObject = {
        proposal: string,
        proposer: string,
    }
}

export class ListProposalsResponse extends jspb.Message {
    clearProposalsList(): void;
    getProposalsList(): Array<vega_governance_pb.Proposal>;
    setProposalsList(value: Array<vega_governance_pb.Proposal>): ListProposalsResponse;
    addProposals(value?: vega_governance_pb.Proposal, index?: number): vega_governance_pb.Proposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListProposalsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListProposalsResponse): ListProposalsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListProposalsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListProposalsResponse;
    static deserializeBinaryFromReader(message: ListProposalsResponse, reader: jspb.BinaryReader): ListProposalsResponse;
}

export namespace ListProposalsResponse {
    export type AsObject = {
        proposalsList: Array<vega_governance_pb.Proposal.AsObject>,
    }
}

export class ListMarketsDataRequest extends jspb.Message {
    getMarket(): string;
    setMarket(value: string): ListMarketsDataRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListMarketsDataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListMarketsDataRequest): ListMarketsDataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListMarketsDataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListMarketsDataRequest;
    static deserializeBinaryFromReader(message: ListMarketsDataRequest, reader: jspb.BinaryReader): ListMarketsDataRequest;
}

export namespace ListMarketsDataRequest {
    export type AsObject = {
        market: string,
    }
}

export class ListMarketsDataResponse extends jspb.Message {
    clearMarketsDataList(): void;
    getMarketsDataList(): Array<vega_vega_pb.MarketData>;
    setMarketsDataList(value: Array<vega_vega_pb.MarketData>): ListMarketsDataResponse;
    addMarketsData(value?: vega_vega_pb.MarketData, index?: number): vega_vega_pb.MarketData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListMarketsDataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListMarketsDataResponse): ListMarketsDataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListMarketsDataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListMarketsDataResponse;
    static deserializeBinaryFromReader(message: ListMarketsDataResponse, reader: jspb.BinaryReader): ListMarketsDataResponse;
}

export namespace ListMarketsDataResponse {
    export type AsObject = {
        marketsDataList: Array<vega_vega_pb.MarketData.AsObject>,
    }
}

export class ListVotesRequest extends jspb.Message {
    getProposal(): string;
    setProposal(value: string): ListVotesRequest;
    getParty(): string;
    setParty(value: string): ListVotesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListVotesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListVotesRequest): ListVotesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListVotesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListVotesRequest;
    static deserializeBinaryFromReader(message: ListVotesRequest, reader: jspb.BinaryReader): ListVotesRequest;
}

export namespace ListVotesRequest {
    export type AsObject = {
        proposal: string,
        party: string,
    }
}

export class ListVotesResponse extends jspb.Message {
    clearVotesList(): void;
    getVotesList(): Array<vega_governance_pb.Vote>;
    setVotesList(value: Array<vega_governance_pb.Vote>): ListVotesResponse;
    addVotes(value?: vega_governance_pb.Vote, index?: number): vega_governance_pb.Vote;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListVotesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListVotesResponse): ListVotesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListVotesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListVotesResponse;
    static deserializeBinaryFromReader(message: ListVotesResponse, reader: jspb.BinaryReader): ListVotesResponse;
}

export namespace ListVotesResponse {
    export type AsObject = {
        votesList: Array<vega_governance_pb.Vote.AsObject>,
    }
}

export class PartyStake extends jspb.Message {
    getParty(): string;
    setParty(value: string): PartyStake;
    getCurrentStakeAvailable(): string;
    setCurrentStakeAvailable(value: string): PartyStake;
    clearStakeLinkingsList(): void;
    getStakeLinkingsList(): Array<vega_events_v1_events_pb.StakeLinking>;
    setStakeLinkingsList(value: Array<vega_events_v1_events_pb.StakeLinking>): PartyStake;
    addStakeLinkings(value?: vega_events_v1_events_pb.StakeLinking, index?: number): vega_events_v1_events_pb.StakeLinking;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PartyStake.AsObject;
    static toObject(includeInstance: boolean, msg: PartyStake): PartyStake.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PartyStake, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PartyStake;
    static deserializeBinaryFromReader(message: PartyStake, reader: jspb.BinaryReader): PartyStake;
}

export namespace PartyStake {
    export type AsObject = {
        party: string,
        currentStakeAvailable: string,
        stakeLinkingsList: Array<vega_events_v1_events_pb.StakeLinking.AsObject>,
    }
}

export class ListPartiesStakeRequest extends jspb.Message {
    getParty(): string;
    setParty(value: string): ListPartiesStakeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPartiesStakeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListPartiesStakeRequest): ListPartiesStakeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPartiesStakeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPartiesStakeRequest;
    static deserializeBinaryFromReader(message: ListPartiesStakeRequest, reader: jspb.BinaryReader): ListPartiesStakeRequest;
}

export namespace ListPartiesStakeRequest {
    export type AsObject = {
        party: string,
    }
}

export class ListPartiesStakeResponse extends jspb.Message {
    clearPartiesStakeList(): void;
    getPartiesStakeList(): Array<PartyStake>;
    setPartiesStakeList(value: Array<PartyStake>): ListPartiesStakeResponse;
    addPartiesStake(value?: PartyStake, index?: number): PartyStake;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPartiesStakeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListPartiesStakeResponse): ListPartiesStakeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPartiesStakeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPartiesStakeResponse;
    static deserializeBinaryFromReader(message: ListPartiesStakeResponse, reader: jspb.BinaryReader): ListPartiesStakeResponse;
}

export namespace ListPartiesStakeResponse {
    export type AsObject = {
        partiesStakeList: Array<PartyStake.AsObject>,
    }
}

export class ListDelegationsRequest extends jspb.Message {
    getParty(): string;
    setParty(value: string): ListDelegationsRequest;
    getNode(): string;
    setNode(value: string): ListDelegationsRequest;
    getEpochSeq(): string;
    setEpochSeq(value: string): ListDelegationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDelegationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListDelegationsRequest): ListDelegationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDelegationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDelegationsRequest;
    static deserializeBinaryFromReader(message: ListDelegationsRequest, reader: jspb.BinaryReader): ListDelegationsRequest;
}

export namespace ListDelegationsRequest {
    export type AsObject = {
        party: string,
        node: string,
        epochSeq: string,
    }
}

export class ListDelegationsResponse extends jspb.Message {
    clearDelegationsList(): void;
    getDelegationsList(): Array<vega_vega_pb.Delegation>;
    setDelegationsList(value: Array<vega_vega_pb.Delegation>): ListDelegationsResponse;
    addDelegations(value?: vega_vega_pb.Delegation, index?: number): vega_vega_pb.Delegation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDelegationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListDelegationsResponse): ListDelegationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDelegationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDelegationsResponse;
    static deserializeBinaryFromReader(message: ListDelegationsResponse, reader: jspb.BinaryReader): ListDelegationsResponse;
}

export namespace ListDelegationsResponse {
    export type AsObject = {
        delegationsList: Array<vega_vega_pb.Delegation.AsObject>,
    }
}
