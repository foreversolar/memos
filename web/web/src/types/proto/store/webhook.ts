/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { RowStatus } from "./common";

export const protobufPackage = "memos.store";

export interface Webhook {
  id: number;
  createdTs: number;
  updatedTs: number;
  creatorId: number;
  rowStatus: RowStatus;
  name: string;
  url: string;
}

function createBaseWebhook(): Webhook {
  return { id: 0, createdTs: 0, updatedTs: 0, creatorId: 0, rowStatus: 0, name: "", url: "" };
}

export const Webhook = {
  encode(message: Webhook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.createdTs !== 0) {
      writer.uint32(16).int64(message.createdTs);
    }
    if (message.updatedTs !== 0) {
      writer.uint32(24).int64(message.updatedTs);
    }
    if (message.creatorId !== 0) {
      writer.uint32(32).int32(message.creatorId);
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

          message.createdTs = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedTs = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.creatorId = reader.int32();
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
    message.createdTs = object.createdTs ?? 0;
    message.updatedTs = object.updatedTs ?? 0;
    message.creatorId = object.creatorId ?? 0;
    message.rowStatus = object.rowStatus ?? 0;
    message.name = object.name ?? "";
    message.url = object.url ?? "";
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
