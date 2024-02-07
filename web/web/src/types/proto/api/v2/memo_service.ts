/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../google/protobuf/field_mask";
import { Timestamp } from "../../google/protobuf/timestamp";
import { RowStatus } from "./common";
import { MemoRelation } from "./memo_relation_service";
import { Resource } from "./resource_service";

export const protobufPackage = "memos.api.v2";

export enum Visibility {
  VISIBILITY_UNSPECIFIED = 0,
  PRIVATE = 1,
  PROTECTED = 2,
  PUBLIC = 3,
  UNRECOGNIZED = -1,
}

export interface Memo {
  /** id is the system generated unique identifier. */
  id: number;
  /** name is the user provided name. */
  name: string;
  rowStatus: RowStatus;
  /**
   * The name of the creator.
   * Format: users/{username}
   */
  creator: string;
  creatorId: number;
  createTime?: Date | undefined;
  updateTime?: Date | undefined;
  displayTime?: Date | undefined;
  content: string;
  visibility: Visibility;
  pinned: boolean;
  parentId?: number | undefined;
  resources: Resource[];
  relations: MemoRelation[];
}

export interface CreateMemoRequest {
  content: string;
  visibility: Visibility;
}

export interface CreateMemoResponse {
  memo?: Memo | undefined;
}

export interface ListMemosRequest {
  /** The maximum number of memos to return. */
  pageSize: number;
  /**
   * A page token, received from a previous `ListMemos` call.
   * Provide this to retrieve the subsequent page.
   */
  pageToken: string;
  /**
   * Filter is used to filter memos returned in the list.
   * Format: "creator == users/{username} && visibilities == ['PUBLIC', 'PROTECTED']"
   */
  filter: string;
}

export interface ListMemosResponse {
  memos: Memo[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken: string;
}

export interface GetMemoRequest {
  id: number;
}

export interface GetMemoResponse {
  memo?: Memo | undefined;
}

export interface GetMemoByNameRequest {
  name: string;
}

export interface GetMemoByNameResponse {
  memo?: Memo | undefined;
}

export interface UpdateMemoRequest {
  memo?: Memo | undefined;
  updateMask?: string[] | undefined;
}

export interface UpdateMemoResponse {
  memo?: Memo | undefined;
}

export interface DeleteMemoRequest {
  id: number;
}

export interface DeleteMemoResponse {
}

export interface SetMemoResourcesRequest {
  id: number;
  resources: Resource[];
}

export interface SetMemoResourcesResponse {
}

export interface ListMemoResourcesRequest {
  id: number;
}

export interface ListMemoResourcesResponse {
  resources: Resource[];
}

export interface SetMemoRelationsRequest {
  id: number;
  relations: MemoRelation[];
}

export interface SetMemoRelationsResponse {
}

export interface ListMemoRelationsRequest {
  id: number;
}

export interface ListMemoRelationsResponse {
  relations: MemoRelation[];
}

export interface CreateMemoCommentRequest {
  /** id is the memo id to create comment for. */
  id: number;
  create?: CreateMemoRequest | undefined;
}

export interface CreateMemoCommentResponse {
  memo?: Memo | undefined;
}

export interface ListMemoCommentsRequest {
  id: number;
}

export interface ListMemoCommentsResponse {
  memos: Memo[];
}

export interface GetUserMemosStatsRequest {
  /**
   * name is the name of the user to get stats for.
   * Format: users/{username}
   */
  name: string;
  /**
   * timezone location
   * Format: uses tz identifier
   * https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
   */
  timezone: string;
  /** Same as ListMemosRequest.filter */
  filter: string;
}

export interface GetUserMemosStatsResponse {
  /**
   * stats is the stats of memo creating/updating activities.
   * key is the year-month-day string. e.g. "2020-01-01".
   */
  stats: { [key: string]: number };
}

export interface GetUserMemosStatsResponse_StatsEntry {
  key: string;
  value: number;
}

export interface ExportMemosRequest {
  /** Same as ListMemosRequest.filter */
  filter: string;
}

export interface ExportMemosResponse {
  content: Uint8Array;
}

function createBaseMemo(): Memo {
  return {
    id: 0,
    name: "",
    rowStatus: 0,
    creator: "",
    creatorId: 0,
    createTime: undefined,
    updateTime: undefined,
    displayTime: undefined,
    content: "",
    visibility: 0,
    pinned: false,
    parentId: undefined,
    resources: [],
    relations: [],
  };
}

export const Memo = {
  encode(message: Memo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.rowStatus !== 0) {
      writer.uint32(24).int32(message.rowStatus);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    if (message.creatorId !== 0) {
      writer.uint32(40).int32(message.creatorId);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(50).fork()).ldelim();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(58).fork()).ldelim();
    }
    if (message.displayTime !== undefined) {
      Timestamp.encode(toTimestamp(message.displayTime), writer.uint32(66).fork()).ldelim();
    }
    if (message.content !== "") {
      writer.uint32(74).string(message.content);
    }
    if (message.visibility !== 0) {
      writer.uint32(80).int32(message.visibility);
    }
    if (message.pinned === true) {
      writer.uint32(88).bool(message.pinned);
    }
    if (message.parentId !== undefined) {
      writer.uint32(96).int32(message.parentId);
    }
    for (const v of message.resources) {
      Resource.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.relations) {
      MemoRelation.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Memo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.rowStatus = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.creatorId = reader.int32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.displayTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.content = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.visibility = reader.int32() as any;
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.pinned = reader.bool();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.parentId = reader.int32();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.resources.push(Resource.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.relations.push(MemoRelation.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Memo>): Memo {
    return Memo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Memo>): Memo {
    const message = createBaseMemo();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.rowStatus = object.rowStatus ?? 0;
    message.creator = object.creator ?? "";
    message.creatorId = object.creatorId ?? 0;
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.displayTime = object.displayTime ?? undefined;
    message.content = object.content ?? "";
    message.visibility = object.visibility ?? 0;
    message.pinned = object.pinned ?? false;
    message.parentId = object.parentId ?? undefined;
    message.resources = object.resources?.map((e) => Resource.fromPartial(e)) || [];
    message.relations = object.relations?.map((e) => MemoRelation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateMemoRequest(): CreateMemoRequest {
  return { content: "", visibility: 0 };
}

export const CreateMemoRequest = {
  encode(message: CreateMemoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== "") {
      writer.uint32(10).string(message.content);
    }
    if (message.visibility !== 0) {
      writer.uint32(16).int32(message.visibility);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateMemoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateMemoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.content = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.visibility = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<CreateMemoRequest>): CreateMemoRequest {
    return CreateMemoRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateMemoRequest>): CreateMemoRequest {
    const message = createBaseCreateMemoRequest();
    message.content = object.content ?? "";
    message.visibility = object.visibility ?? 0;
    return message;
  },
};

function createBaseCreateMemoResponse(): CreateMemoResponse {
  return { memo: undefined };
}

export const CreateMemoResponse = {
  encode(message: CreateMemoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.memo !== undefined) {
      Memo.encode(message.memo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateMemoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateMemoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.memo = Memo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<CreateMemoResponse>): CreateMemoResponse {
    return CreateMemoResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateMemoResponse>): CreateMemoResponse {
    const message = createBaseCreateMemoResponse();
    message.memo = (object.memo !== undefined && object.memo !== null) ? Memo.fromPartial(object.memo) : undefined;
    return message;
  },
};

function createBaseListMemosRequest(): ListMemosRequest {
  return { pageSize: 0, pageToken: "", filter: "" };
}

export const ListMemosRequest = {
  encode(message: ListMemosRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pageSize !== 0) {
      writer.uint32(8).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(26).string(message.filter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListMemosRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMemosRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.pageSize = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pageToken = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.filter = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListMemosRequest>): ListMemosRequest {
    return ListMemosRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ListMemosRequest>): ListMemosRequest {
    const message = createBaseListMemosRequest();
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

function createBaseListMemosResponse(): ListMemosResponse {
  return { memos: [], nextPageToken: "" };
}

export const ListMemosResponse = {
  encode(message: ListMemosResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.memos) {
      Memo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListMemosResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMemosResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.memos.push(Memo.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextPageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListMemosResponse>): ListMemosResponse {
    return ListMemosResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ListMemosResponse>): ListMemosResponse {
    const message = createBaseListMemosResponse();
    message.memos = object.memos?.map((e) => Memo.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

function createBaseGetMemoRequest(): GetMemoRequest {
  return { id: 0 };
}

export const GetMemoRequest = {
  encode(message: GetMemoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMemoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMemoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GetMemoRequest>): GetMemoRequest {
    return GetMemoRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetMemoRequest>): GetMemoRequest {
    const message = createBaseGetMemoRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseGetMemoResponse(): GetMemoResponse {
  return { memo: undefined };
}

export const GetMemoResponse = {
  encode(message: GetMemoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.memo !== undefined) {
      Memo.encode(message.memo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMemoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMemoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.memo = Memo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GetMemoResponse>): GetMemoResponse {
    return GetMemoResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetMemoResponse>): GetMemoResponse {
    const message = createBaseGetMemoResponse();
    message.memo = (object.memo !== undefined && object.memo !== null) ? Memo.fromPartial(object.memo) : undefined;
    return message;
  },
};

function createBaseGetMemoByNameRequest(): GetMemoByNameRequest {
  return { name: "" };
}

export const GetMemoByNameRequest = {
  encode(message: GetMemoByNameRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMemoByNameRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMemoByNameRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GetMemoByNameRequest>): GetMemoByNameRequest {
    return GetMemoByNameRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetMemoByNameRequest>): GetMemoByNameRequest {
    const message = createBaseGetMemoByNameRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseGetMemoByNameResponse(): GetMemoByNameResponse {
  return { memo: undefined };
}

export const GetMemoByNameResponse = {
  encode(message: GetMemoByNameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.memo !== undefined) {
      Memo.encode(message.memo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMemoByNameResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMemoByNameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.memo = Memo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GetMemoByNameResponse>): GetMemoByNameResponse {
    return GetMemoByNameResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetMemoByNameResponse>): GetMemoByNameResponse {
    const message = createBaseGetMemoByNameResponse();
    message.memo = (object.memo !== undefined && object.memo !== null) ? Memo.fromPartial(object.memo) : undefined;
    return message;
  },
};

function createBaseUpdateMemoRequest(): UpdateMemoRequest {
  return { memo: undefined, updateMask: undefined };
}

export const UpdateMemoRequest = {
  encode(message: UpdateMemoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.memo !== undefined) {
      Memo.encode(message.memo, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMemoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateMemoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.memo = Memo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<UpdateMemoRequest>): UpdateMemoRequest {
    return UpdateMemoRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateMemoRequest>): UpdateMemoRequest {
    const message = createBaseUpdateMemoRequest();
    message.memo = (object.memo !== undefined && object.memo !== null) ? Memo.fromPartial(object.memo) : undefined;
    message.updateMask = object.updateMask ?? undefined;
    return message;
  },
};

function createBaseUpdateMemoResponse(): UpdateMemoResponse {
  return { memo: undefined };
}

export const UpdateMemoResponse = {
  encode(message: UpdateMemoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.memo !== undefined) {
      Memo.encode(message.memo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMemoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateMemoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.memo = Memo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<UpdateMemoResponse>): UpdateMemoResponse {
    return UpdateMemoResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateMemoResponse>): UpdateMemoResponse {
    const message = createBaseUpdateMemoResponse();
    message.memo = (object.memo !== undefined && object.memo !== null) ? Memo.fromPartial(object.memo) : undefined;
    return message;
  },
};

function createBaseDeleteMemoRequest(): DeleteMemoRequest {
  return { id: 0 };
}

export const DeleteMemoRequest = {
  encode(message: DeleteMemoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMemoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteMemoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<DeleteMemoRequest>): DeleteMemoRequest {
    return DeleteMemoRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DeleteMemoRequest>): DeleteMemoRequest {
    const message = createBaseDeleteMemoRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseDeleteMemoResponse(): DeleteMemoResponse {
  return {};
}

export const DeleteMemoResponse = {
  encode(_: DeleteMemoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMemoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteMemoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<DeleteMemoResponse>): DeleteMemoResponse {
    return DeleteMemoResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<DeleteMemoResponse>): DeleteMemoResponse {
    const message = createBaseDeleteMemoResponse();
    return message;
  },
};

function createBaseSetMemoResourcesRequest(): SetMemoResourcesRequest {
  return { id: 0, resources: [] };
}

export const SetMemoResourcesRequest = {
  encode(message: SetMemoResourcesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    for (const v of message.resources) {
      Resource.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetMemoResourcesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetMemoResourcesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.resources.push(Resource.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SetMemoResourcesRequest>): SetMemoResourcesRequest {
    return SetMemoResourcesRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetMemoResourcesRequest>): SetMemoResourcesRequest {
    const message = createBaseSetMemoResourcesRequest();
    message.id = object.id ?? 0;
    message.resources = object.resources?.map((e) => Resource.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSetMemoResourcesResponse(): SetMemoResourcesResponse {
  return {};
}

export const SetMemoResourcesResponse = {
  encode(_: SetMemoResourcesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetMemoResourcesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetMemoResourcesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SetMemoResourcesResponse>): SetMemoResourcesResponse {
    return SetMemoResourcesResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<SetMemoResourcesResponse>): SetMemoResourcesResponse {
    const message = createBaseSetMemoResourcesResponse();
    return message;
  },
};

function createBaseListMemoResourcesRequest(): ListMemoResourcesRequest {
  return { id: 0 };
}

export const ListMemoResourcesRequest = {
  encode(message: ListMemoResourcesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListMemoResourcesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMemoResourcesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListMemoResourcesRequest>): ListMemoResourcesRequest {
    return ListMemoResourcesRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ListMemoResourcesRequest>): ListMemoResourcesRequest {
    const message = createBaseListMemoResourcesRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseListMemoResourcesResponse(): ListMemoResourcesResponse {
  return { resources: [] };
}

export const ListMemoResourcesResponse = {
  encode(message: ListMemoResourcesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.resources) {
      Resource.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListMemoResourcesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMemoResourcesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resources.push(Resource.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListMemoResourcesResponse>): ListMemoResourcesResponse {
    return ListMemoResourcesResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ListMemoResourcesResponse>): ListMemoResourcesResponse {
    const message = createBaseListMemoResourcesResponse();
    message.resources = object.resources?.map((e) => Resource.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSetMemoRelationsRequest(): SetMemoRelationsRequest {
  return { id: 0, relations: [] };
}

export const SetMemoRelationsRequest = {
  encode(message: SetMemoRelationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    for (const v of message.relations) {
      MemoRelation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetMemoRelationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetMemoRelationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.relations.push(MemoRelation.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SetMemoRelationsRequest>): SetMemoRelationsRequest {
    return SetMemoRelationsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetMemoRelationsRequest>): SetMemoRelationsRequest {
    const message = createBaseSetMemoRelationsRequest();
    message.id = object.id ?? 0;
    message.relations = object.relations?.map((e) => MemoRelation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSetMemoRelationsResponse(): SetMemoRelationsResponse {
  return {};
}

export const SetMemoRelationsResponse = {
  encode(_: SetMemoRelationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetMemoRelationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetMemoRelationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SetMemoRelationsResponse>): SetMemoRelationsResponse {
    return SetMemoRelationsResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<SetMemoRelationsResponse>): SetMemoRelationsResponse {
    const message = createBaseSetMemoRelationsResponse();
    return message;
  },
};

function createBaseListMemoRelationsRequest(): ListMemoRelationsRequest {
  return { id: 0 };
}

export const ListMemoRelationsRequest = {
  encode(message: ListMemoRelationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListMemoRelationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMemoRelationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListMemoRelationsRequest>): ListMemoRelationsRequest {
    return ListMemoRelationsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ListMemoRelationsRequest>): ListMemoRelationsRequest {
    const message = createBaseListMemoRelationsRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseListMemoRelationsResponse(): ListMemoRelationsResponse {
  return { relations: [] };
}

export const ListMemoRelationsResponse = {
  encode(message: ListMemoRelationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.relations) {
      MemoRelation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListMemoRelationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMemoRelationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.relations.push(MemoRelation.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListMemoRelationsResponse>): ListMemoRelationsResponse {
    return ListMemoRelationsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ListMemoRelationsResponse>): ListMemoRelationsResponse {
    const message = createBaseListMemoRelationsResponse();
    message.relations = object.relations?.map((e) => MemoRelation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateMemoCommentRequest(): CreateMemoCommentRequest {
  return { id: 0, create: undefined };
}

export const CreateMemoCommentRequest = {
  encode(message: CreateMemoCommentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.create !== undefined) {
      CreateMemoRequest.encode(message.create, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateMemoCommentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateMemoCommentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.create = CreateMemoRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<CreateMemoCommentRequest>): CreateMemoCommentRequest {
    return CreateMemoCommentRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateMemoCommentRequest>): CreateMemoCommentRequest {
    const message = createBaseCreateMemoCommentRequest();
    message.id = object.id ?? 0;
    message.create = (object.create !== undefined && object.create !== null)
      ? CreateMemoRequest.fromPartial(object.create)
      : undefined;
    return message;
  },
};

function createBaseCreateMemoCommentResponse(): CreateMemoCommentResponse {
  return { memo: undefined };
}

export const CreateMemoCommentResponse = {
  encode(message: CreateMemoCommentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.memo !== undefined) {
      Memo.encode(message.memo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateMemoCommentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateMemoCommentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.memo = Memo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<CreateMemoCommentResponse>): CreateMemoCommentResponse {
    return CreateMemoCommentResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateMemoCommentResponse>): CreateMemoCommentResponse {
    const message = createBaseCreateMemoCommentResponse();
    message.memo = (object.memo !== undefined && object.memo !== null) ? Memo.fromPartial(object.memo) : undefined;
    return message;
  },
};

function createBaseListMemoCommentsRequest(): ListMemoCommentsRequest {
  return { id: 0 };
}

export const ListMemoCommentsRequest = {
  encode(message: ListMemoCommentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListMemoCommentsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMemoCommentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListMemoCommentsRequest>): ListMemoCommentsRequest {
    return ListMemoCommentsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ListMemoCommentsRequest>): ListMemoCommentsRequest {
    const message = createBaseListMemoCommentsRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseListMemoCommentsResponse(): ListMemoCommentsResponse {
  return { memos: [] };
}

export const ListMemoCommentsResponse = {
  encode(message: ListMemoCommentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.memos) {
      Memo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListMemoCommentsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMemoCommentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.memos.push(Memo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListMemoCommentsResponse>): ListMemoCommentsResponse {
    return ListMemoCommentsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ListMemoCommentsResponse>): ListMemoCommentsResponse {
    const message = createBaseListMemoCommentsResponse();
    message.memos = object.memos?.map((e) => Memo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetUserMemosStatsRequest(): GetUserMemosStatsRequest {
  return { name: "", timezone: "", filter: "" };
}

export const GetUserMemosStatsRequest = {
  encode(message: GetUserMemosStatsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.timezone !== "") {
      writer.uint32(18).string(message.timezone);
    }
    if (message.filter !== "") {
      writer.uint32(26).string(message.filter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserMemosStatsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserMemosStatsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.timezone = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.filter = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GetUserMemosStatsRequest>): GetUserMemosStatsRequest {
    return GetUserMemosStatsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetUserMemosStatsRequest>): GetUserMemosStatsRequest {
    const message = createBaseGetUserMemosStatsRequest();
    message.name = object.name ?? "";
    message.timezone = object.timezone ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

function createBaseGetUserMemosStatsResponse(): GetUserMemosStatsResponse {
  return { stats: {} };
}

export const GetUserMemosStatsResponse = {
  encode(message: GetUserMemosStatsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.stats).forEach(([key, value]) => {
      GetUserMemosStatsResponse_StatsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserMemosStatsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserMemosStatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = GetUserMemosStatsResponse_StatsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.stats[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GetUserMemosStatsResponse>): GetUserMemosStatsResponse {
    return GetUserMemosStatsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetUserMemosStatsResponse>): GetUserMemosStatsResponse {
    const message = createBaseGetUserMemosStatsResponse();
    message.stats = Object.entries(object.stats ?? {}).reduce<{ [key: string]: number }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Number(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseGetUserMemosStatsResponse_StatsEntry(): GetUserMemosStatsResponse_StatsEntry {
  return { key: "", value: 0 };
}

export const GetUserMemosStatsResponse_StatsEntry = {
  encode(message: GetUserMemosStatsResponse_StatsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserMemosStatsResponse_StatsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserMemosStatsResponse_StatsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GetUserMemosStatsResponse_StatsEntry>): GetUserMemosStatsResponse_StatsEntry {
    return GetUserMemosStatsResponse_StatsEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetUserMemosStatsResponse_StatsEntry>): GetUserMemosStatsResponse_StatsEntry {
    const message = createBaseGetUserMemosStatsResponse_StatsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseExportMemosRequest(): ExportMemosRequest {
  return { filter: "" };
}

export const ExportMemosRequest = {
  encode(message: ExportMemosRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== "") {
      writer.uint32(10).string(message.filter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExportMemosRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExportMemosRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ExportMemosRequest>): ExportMemosRequest {
    return ExportMemosRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ExportMemosRequest>): ExportMemosRequest {
    const message = createBaseExportMemosRequest();
    message.filter = object.filter ?? "";
    return message;
  },
};

function createBaseExportMemosResponse(): ExportMemosResponse {
  return { content: new Uint8Array(0) };
}

export const ExportMemosResponse = {
  encode(message: ExportMemosResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content.length !== 0) {
      writer.uint32(10).bytes(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExportMemosResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExportMemosResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.content = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ExportMemosResponse>): ExportMemosResponse {
    return ExportMemosResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ExportMemosResponse>): ExportMemosResponse {
    const message = createBaseExportMemosResponse();
    message.content = object.content ?? new Uint8Array(0);
    return message;
  },
};

export type MemoServiceDefinition = typeof MemoServiceDefinition;
export const MemoServiceDefinition = {
  name: "MemoService",
  fullName: "memos.api.v2.MemoService",
  methods: {
    /** CreateMemo creates a memo. */
    createMemo: {
      name: "CreateMemo",
      requestType: CreateMemoRequest,
      requestStream: false,
      responseType: CreateMemoResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            new Uint8Array([18, 58, 1, 42, 34, 13, 47, 97, 112, 105, 47, 118, 50, 47, 109, 101, 109, 111, 115]),
          ],
        },
      },
    },
    /** ListMemos lists memos with pagination and filter. */
    listMemos: {
      name: "ListMemos",
      requestType: ListMemosRequest,
      requestStream: false,
      responseType: ListMemosResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [new Uint8Array([15, 18, 13, 47, 97, 112, 105, 47, 118, 50, 47, 109, 101, 109, 111, 115])],
        },
      },
    },
    /** GetMemo gets a memo by id. */
    getMemo: {
      name: "GetMemo",
      requestType: GetMemoRequest,
      requestStream: false,
      responseType: GetMemoResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([2, 105, 100])],
          578365826: [
            new Uint8Array([
              20,
              18,
              18,
              47,
              97,
              112,
              105,
              47,
              118,
              50,
              47,
              109,
              101,
              109,
              111,
              115,
              47,
              123,
              105,
              100,
              125,
            ]),
          ],
        },
      },
    },
    /** GetMemoByName gets a memo by name. */
    getMemoByName: {
      name: "GetMemoByName",
      requestType: GetMemoByNameRequest,
      requestStream: false,
      responseType: GetMemoByNameResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([4, 110, 97, 109, 101])],
          578365826: [
            new Uint8Array([
              27,
              18,
              25,
              47,
              97,
              112,
              105,
              47,
              118,
              50,
              47,
              109,
              101,
              109,
              111,
              115,
              47,
              110,
              97,
              109,
              101,
              47,
              123,
              110,
              97,
              109,
              101,
              125,
            ]),
          ],
        },
      },
    },
    /** UpdateMemo updates a memo. */
    updateMemo: {
      name: "UpdateMemo",
      requestType: UpdateMemoRequest,
      requestStream: false,
      responseType: UpdateMemoResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([16, 109, 101, 109, 111, 44, 117, 112, 100, 97, 116, 101, 95, 109, 97, 115, 107])],
          578365826: [
            new Uint8Array([
              31,
              58,
              4,
              109,
              101,
              109,
              111,
              50,
              23,
              47,
              97,
              112,
              105,
              47,
              118,
              50,
              47,
              109,
              101,
              109,
              111,
              115,
              47,
              123,
              109,
              101,
              109,
              111,
              46,
              105,
              100,
              125,
            ]),
          ],
        },
      },
    },
    /** DeleteMemo deletes a memo by id. */
    deleteMemo: {
      name: "DeleteMemo",
      requestType: DeleteMemoRequest,
      requestStream: false,
      responseType: DeleteMemoResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([2, 105, 100])],
          578365826: [
            new Uint8Array([
              20,
              42,
              18,
              47,
              97,
              112,
              105,
              47,
              118,
              50,
              47,
              109,
              101,
              109,
              111,
              115,
              47,
              123,
              105,
              100,
              125,
            ]),
          ],
        },
      },
    },
    /** SetMemoResources sets resources for a memo. */
    setMemoResources: {
      name: "SetMemoResources",
      requestType: SetMemoResourcesRequest,
      requestStream: false,
      responseType: SetMemoResourcesResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([2, 105, 100])],
          578365826: [
            new Uint8Array([
              33,
              58,
              1,
              42,
              34,
              28,
              47,
              97,
              112,
              105,
              47,
              118,
              50,
              47,
              109,
              101,
              109,
              111,
              115,
              47,
              123,
              105,
              100,
              125,
              47,
              114,
              101,
              115,
              111,
              117,
              114,
              99,
              101,
              115,
            ]),
          ],
        },
      },
    },
    /** ListMemoResources lists resources for a memo. */
    listMemoResources: {
      name: "ListMemoResources",
      requestType: ListMemoResourcesRequest,
      requestStream: false,
      responseType: ListMemoResourcesResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([2, 105, 100])],
          578365826: [
            new Uint8Array([
              30,
              18,
              28,
              47,
              97,
              112,
              105,
              47,
              118,
              50,
              47,
              109,
              101,
              109,
              111,
              115,
              47,
              123,
              105,
              100,
              125,
              47,
              114,
              101,
              115,
              111,
              117,
              114,
              99,
              101,
              115,
            ]),
          ],
        },
      },
    },
    /** SetMemoRelations sets relations for a memo. */
    setMemoRelations: {
      name: "SetMemoRelations",
      requestType: SetMemoRelationsRequest,
      requestStream: false,
      responseType: SetMemoRelationsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([2, 105, 100])],
          578365826: [
            new Uint8Array([
              33,
              58,
              1,
              42,
              34,
              28,
              47,
              97,
              112,
              105,
              47,
              118,
              50,
              47,
              109,
              101,
              109,
              111,
              115,
              47,
              123,
              105,
              100,
              125,
              47,
              114,
              101,
              108,
              97,
              116,
              105,
              111,
              110,
              115,
            ]),
          ],
        },
      },
    },
    /** ListMemoRelations lists relations for a memo. */
    listMemoRelations: {
      name: "ListMemoRelations",
      requestType: ListMemoRelationsRequest,
      requestStream: false,
      responseType: ListMemoRelationsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([2, 105, 100])],
          578365826: [
            new Uint8Array([
              30,
              18,
              28,
              47,
              97,
              112,
              105,
              47,
              118,
              50,
              47,
              109,
              101,
              109,
              111,
              115,
              47,
              123,
              105,
              100,
              125,
              47,
              114,
              101,
              108,
              97,
              116,
              105,
              111,
              110,
              115,
            ]),
          ],
        },
      },
    },
    /** CreateMemoComment creates a comment for a memo. */
    createMemoComment: {
      name: "CreateMemoComment",
      requestType: CreateMemoCommentRequest,
      requestStream: false,
      responseType: CreateMemoCommentResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([2, 105, 100])],
          578365826: [
            new Uint8Array([
              29,
              34,
              27,
              47,
              97,
              112,
              105,
              47,
              118,
              50,
              47,
              109,
              101,
              109,
              111,
              115,
              47,
              123,
              105,
              100,
              125,
              47,
              99,
              111,
              109,
              109,
              101,
              110,
              116,
              115,
            ]),
          ],
        },
      },
    },
    /** ListMemoComments lists comments for a memo. */
    listMemoComments: {
      name: "ListMemoComments",
      requestType: ListMemoCommentsRequest,
      requestStream: false,
      responseType: ListMemoCommentsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([2, 105, 100])],
          578365826: [
            new Uint8Array([
              29,
              18,
              27,
              47,
              97,
              112,
              105,
              47,
              118,
              50,
              47,
              109,
              101,
              109,
              111,
              115,
              47,
              123,
              105,
              100,
              125,
              47,
              99,
              111,
              109,
              109,
              101,
              110,
              116,
              115,
            ]),
          ],
        },
      },
    },
    /** ExportMemos exports memos. */
    exportMemos: {
      name: "ExportMemos",
      requestType: ExportMemosRequest,
      requestStream: false,
      responseType: ExportMemosResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            new Uint8Array([
              22,
              34,
              20,
              47,
              97,
              112,
              105,
              47,
              118,
              50,
              47,
              109,
              101,
              109,
              111,
              115,
              58,
              101,
              120,
              112,
              111,
              114,
              116,
            ]),
          ],
        },
      },
    },
    /** GetUserMemosStats gets stats of memos for a user. */
    getUserMemosStats: {
      name: "GetUserMemosStats",
      requestType: GetUserMemosStatsRequest,
      requestStream: false,
      responseType: GetUserMemosStatsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([8, 117, 115, 101, 114, 110, 97, 109, 101])],
          578365826: [
            new Uint8Array([
              21,
              18,
              19,
              47,
              97,
              112,
              105,
              47,
              118,
              50,
              47,
              109,
              101,
              109,
              111,
              115,
              47,
              115,
              116,
              97,
              116,
              115,
            ]),
          ],
        },
      },
    },
  },
} as const;

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new Date(millis);
}
