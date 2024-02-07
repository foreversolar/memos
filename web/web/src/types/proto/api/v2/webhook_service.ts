/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../google/protobuf/field_mask";
import { Timestamp } from "../../google/protobuf/timestamp";
import { RowStatus } from "./common";

export const protobufPackage = "memos.api.v2";

export interface Webhook {
  id: number;
  creatorId: number;
  createdTime?: Date | undefined;
  updatedTime?: Date | undefined;
  rowStatus: RowStatus;
  name: string;
  url: string;
}

export interface CreateWebhookRequest {
  name: string;
  url: string;
}

export interface CreateWebhookResponse {
  webhook?: Webhook | undefined;
}

export interface GetWebhookRequest {
  id: number;
}

export interface GetWebhookResponse {
  webhook?: Webhook | undefined;
}

export interface ListWebhooksRequest {
  creatorId: number;
}

export interface ListWebhooksResponse {
  webhooks: Webhook[];
}

export interface UpdateWebhookRequest {
  webhook?: Webhook | undefined;
  updateMask?: string[] | undefined;
}

export interface UpdateWebhookResponse {
  webhook?: Webhook | undefined;
}

export interface DeleteWebhookRequest {
  id: number;
}

export interface DeleteWebhookResponse {
}

function createBaseWebhook(): Webhook {
  return { id: 0, creatorId: 0, createdTime: undefined, updatedTime: undefined, rowStatus: 0, name: "", url: "" };
}

export const Webhook = {
  encode(message: Webhook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.creatorId !== 0) {
      writer.uint32(16).int32(message.creatorId);
    }
    if (message.createdTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createdTime), writer.uint32(26).fork()).ldelim();
    }
    if (message.updatedTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.rowStatus !== 0) {
      writer.uint32(40).int32(message.rowStatus);
    }
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    if (message.url !== "") {
      writer.uint32(58).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Webhook {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWebhook();
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
          if (tag !== 16) {
            break;
          }

          message.creatorId = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.createdTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.updatedTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.rowStatus = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.name = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.url = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Webhook>): Webhook {
    return Webhook.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Webhook>): Webhook {
    const message = createBaseWebhook();
    message.id = object.id ?? 0;
    message.creatorId = object.creatorId ?? 0;
    message.createdTime = object.createdTime ?? undefined;
    message.updatedTime = object.updatedTime ?? undefined;
    message.rowStatus = object.rowStatus ?? 0;
    message.name = object.name ?? "";
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseCreateWebhookRequest(): CreateWebhookRequest {
  return { name: "", url: "" };
}

export const CreateWebhookRequest = {
  encode(message: CreateWebhookRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateWebhookRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateWebhookRequest();
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

          message.url = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<CreateWebhookRequest>): CreateWebhookRequest {
    return CreateWebhookRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateWebhookRequest>): CreateWebhookRequest {
    const message = createBaseCreateWebhookRequest();
    message.name = object.name ?? "";
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseCreateWebhookResponse(): CreateWebhookResponse {
  return { webhook: undefined };
}

export const CreateWebhookResponse = {
  encode(message: CreateWebhookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.webhook !== undefined) {
      Webhook.encode(message.webhook, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateWebhookResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateWebhookResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.webhook = Webhook.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<CreateWebhookResponse>): CreateWebhookResponse {
    return CreateWebhookResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateWebhookResponse>): CreateWebhookResponse {
    const message = createBaseCreateWebhookResponse();
    message.webhook = (object.webhook !== undefined && object.webhook !== null)
      ? Webhook.fromPartial(object.webhook)
      : undefined;
    return message;
  },
};

function createBaseGetWebhookRequest(): GetWebhookRequest {
  return { id: 0 };
}

export const GetWebhookRequest = {
  encode(message: GetWebhookRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetWebhookRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetWebhookRequest();
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

  create(base?: DeepPartial<GetWebhookRequest>): GetWebhookRequest {
    return GetWebhookRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetWebhookRequest>): GetWebhookRequest {
    const message = createBaseGetWebhookRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseGetWebhookResponse(): GetWebhookResponse {
  return { webhook: undefined };
}

export const GetWebhookResponse = {
  encode(message: GetWebhookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.webhook !== undefined) {
      Webhook.encode(message.webhook, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetWebhookResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetWebhookResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.webhook = Webhook.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GetWebhookResponse>): GetWebhookResponse {
    return GetWebhookResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetWebhookResponse>): GetWebhookResponse {
    const message = createBaseGetWebhookResponse();
    message.webhook = (object.webhook !== undefined && object.webhook !== null)
      ? Webhook.fromPartial(object.webhook)
      : undefined;
    return message;
  },
};

function createBaseListWebhooksRequest(): ListWebhooksRequest {
  return { creatorId: 0 };
}

export const ListWebhooksRequest = {
  encode(message: ListWebhooksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creatorId !== 0) {
      writer.uint32(8).int32(message.creatorId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListWebhooksRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListWebhooksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.creatorId = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListWebhooksRequest>): ListWebhooksRequest {
    return ListWebhooksRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ListWebhooksRequest>): ListWebhooksRequest {
    const message = createBaseListWebhooksRequest();
    message.creatorId = object.creatorId ?? 0;
    return message;
  },
};

function createBaseListWebhooksResponse(): ListWebhooksResponse {
  return { webhooks: [] };
}

export const ListWebhooksResponse = {
  encode(message: ListWebhooksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.webhooks) {
      Webhook.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListWebhooksResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListWebhooksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.webhooks.push(Webhook.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListWebhooksResponse>): ListWebhooksResponse {
    return ListWebhooksResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ListWebhooksResponse>): ListWebhooksResponse {
    const message = createBaseListWebhooksResponse();
    message.webhooks = object.webhooks?.map((e) => Webhook.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateWebhookRequest(): UpdateWebhookRequest {
  return { webhook: undefined, updateMask: undefined };
}

export const UpdateWebhookRequest = {
  encode(message: UpdateWebhookRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.webhook !== undefined) {
      Webhook.encode(message.webhook, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateWebhookRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateWebhookRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.webhook = Webhook.decode(reader, reader.uint32());
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

  create(base?: DeepPartial<UpdateWebhookRequest>): UpdateWebhookRequest {
    return UpdateWebhookRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateWebhookRequest>): UpdateWebhookRequest {
    const message = createBaseUpdateWebhookRequest();
    message.webhook = (object.webhook !== undefined && object.webhook !== null)
      ? Webhook.fromPartial(object.webhook)
      : undefined;
    message.updateMask = object.updateMask ?? undefined;
    return message;
  },
};

function createBaseUpdateWebhookResponse(): UpdateWebhookResponse {
  return { webhook: undefined };
}

export const UpdateWebhookResponse = {
  encode(message: UpdateWebhookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.webhook !== undefined) {
      Webhook.encode(message.webhook, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateWebhookResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateWebhookResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.webhook = Webhook.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<UpdateWebhookResponse>): UpdateWebhookResponse {
    return UpdateWebhookResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateWebhookResponse>): UpdateWebhookResponse {
    const message = createBaseUpdateWebhookResponse();
    message.webhook = (object.webhook !== undefined && object.webhook !== null)
      ? Webhook.fromPartial(object.webhook)
      : undefined;
    return message;
  },
};

function createBaseDeleteWebhookRequest(): DeleteWebhookRequest {
  return { id: 0 };
}

export const DeleteWebhookRequest = {
  encode(message: DeleteWebhookRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteWebhookRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteWebhookRequest();
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

  create(base?: DeepPartial<DeleteWebhookRequest>): DeleteWebhookRequest {
    return DeleteWebhookRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DeleteWebhookRequest>): DeleteWebhookRequest {
    const message = createBaseDeleteWebhookRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseDeleteWebhookResponse(): DeleteWebhookResponse {
  return {};
}

export const DeleteWebhookResponse = {
  encode(_: DeleteWebhookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteWebhookResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteWebhookResponse();
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

  create(base?: DeepPartial<DeleteWebhookResponse>): DeleteWebhookResponse {
    return DeleteWebhookResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<DeleteWebhookResponse>): DeleteWebhookResponse {
    const message = createBaseDeleteWebhookResponse();
    return message;
  },
};

export type WebhookServiceDefinition = typeof WebhookServiceDefinition;
export const WebhookServiceDefinition = {
  name: "WebhookService",
  fullName: "memos.api.v2.WebhookService",
  methods: {
    /** CreateWebhook creates a new webhook. */
    createWebhook: {
      name: "CreateWebhook",
      requestType: CreateWebhookRequest,
      requestStream: false,
      responseType: CreateWebhookResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            new Uint8Array([
              21,
              58,
              1,
              42,
              34,
              16,
              47,
              97,
              112,
              105,
              47,
              118,
              50,
              47,
              119,
              101,
              98,
              104,
              111,
              111,
              107,
              115,
            ]),
          ],
        },
      },
    },
    /** GetWebhook returns a webhook by id. */
    getWebhook: {
      name: "GetWebhook",
      requestType: GetWebhookRequest,
      requestStream: false,
      responseType: GetWebhookResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([2, 105, 100])],
          578365826: [
            new Uint8Array([
              23,
              18,
              21,
              47,
              97,
              112,
              105,
              47,
              118,
              50,
              47,
              119,
              101,
              98,
              104,
              111,
              111,
              107,
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
    /** ListWebhooks returns a list of webhooks. */
    listWebhooks: {
      name: "ListWebhooks",
      requestType: ListWebhooksRequest,
      requestStream: false,
      responseType: ListWebhooksResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            new Uint8Array([18, 18, 16, 47, 97, 112, 105, 47, 118, 50, 47, 119, 101, 98, 104, 111, 111, 107, 115]),
          ],
        },
      },
    },
    /** UpdateWebhook updates a webhook. */
    updateWebhook: {
      name: "UpdateWebhook",
      requestType: UpdateWebhookRequest,
      requestStream: false,
      responseType: UpdateWebhookResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [
            new Uint8Array([
              19,
              119,
              101,
              98,
              104,
              111,
              111,
              107,
              44,
              117,
              112,
              100,
              97,
              116,
              101,
              95,
              109,
              97,
              115,
              107,
            ]),
          ],
          578365826: [
            new Uint8Array([
              40,
              58,
              7,
              119,
              101,
              98,
              104,
              111,
              111,
              107,
              50,
              29,
              47,
              97,
              112,
              105,
              47,
              118,
              50,
              47,
              119,
              101,
              98,
              104,
              111,
              111,
              107,
              115,
              47,
              123,
              119,
              101,
              98,
              104,
              111,
              111,
              107,
              46,
              105,
              100,
              125,
            ]),
          ],
        },
      },
    },
    /** DeleteWebhook deletes a webhook by id. */
    deleteWebhook: {
      name: "DeleteWebhook",
      requestType: DeleteWebhookRequest,
      requestStream: false,
      responseType: DeleteWebhookResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([2, 105, 100])],
          578365826: [
            new Uint8Array([
              23,
              42,
              21,
              47,
              97,
              112,
              105,
              47,
              118,
              50,
              47,
              119,
              101,
              98,
              104,
              111,
              111,
              107,
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
