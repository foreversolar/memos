/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "memos.store";

export enum WorkspaceSettingKey {
  WORKSPACE_SETTING_KEY_UNSPECIFIED = 0,
  WORKSPACE_SETTING_GENERAL = 1,
  UNRECOGNIZED = -1,
}

export interface WorkspaceGeneralSetting {
  instanceUrl: string;
  disallowSignup: boolean;
  disallowPasswordLogin: boolean;
}

function createBaseWorkspaceGeneralSetting(): WorkspaceGeneralSetting {
  return { instanceUrl: "", disallowSignup: false, disallowPasswordLogin: false };
}

export const WorkspaceGeneralSetting = {
  encode(message: WorkspaceGeneralSetting, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceUrl !== "") {
      writer.uint32(10).string(message.instanceUrl);
    }
    if (message.disallowSignup === true) {
      writer.uint32(16).bool(message.disallowSignup);
    }
    if (message.disallowPasswordLogin === true) {
      writer.uint32(24).bool(message.disallowPasswordLogin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WorkspaceGeneralSetting {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWorkspaceGeneralSetting();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceUrl = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.disallowSignup = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.disallowPasswordLogin = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<WorkspaceGeneralSetting>): WorkspaceGeneralSetting {
    return WorkspaceGeneralSetting.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<WorkspaceGeneralSetting>): WorkspaceGeneralSetting {
    const message = createBaseWorkspaceGeneralSetting();
    message.instanceUrl = object.instanceUrl ?? "";
    message.disallowSignup = object.disallowSignup ?? false;
    message.disallowPasswordLogin = object.disallowPasswordLogin ?? false;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
