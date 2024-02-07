/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "memos.api.v2";

export interface MemoRelation {
  memoId: number;
  relatedMemoId: number;
  type: MemoRelation_Type;
}

export enum MemoRelation_Type {
  TYPE_UNSPECIFIED = 0,
  REFERENCE = 1,
  COMMENT = 2,
  UNRECOGNIZED = -1,
}

function createBaseMemoRelation(): MemoRelation {
  return { memoId: 0, relatedMemoId: 0, type: 0 };
}

export const MemoRelation = {
  encode(message: MemoRelation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.memoId !== 0) {
      writer.uint32(8).int32(message.memoId);
    }
    if (message.relatedMemoId !== 0) {
      writer.uint32(16).int32(message.relatedMemoId);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MemoRelation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemoRelation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.memoId = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.relatedMemoId = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<MemoRelation>): MemoRelation {
    return MemoRelation.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MemoRelation>): MemoRelation {
    const message = createBaseMemoRelation();
    message.memoId = object.memoId ?? 0;
    message.relatedMemoId = object.relatedMemoId ?? 0;
    message.type = object.type ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
