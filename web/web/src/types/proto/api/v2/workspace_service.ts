/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../google/protobuf/field_mask";

export const protobufPackage = "memos.api.v2";

export interface WorkspaceProfile {
  version: string;
  mode: string;
  allowRegistration: boolean;
  disablePasswordLogin: boolean;
  additionalScript: string;
  additionalStyle: string;
}

export interface GetWorkspaceProfileRequest {
}

export interface GetWorkspaceProfileResponse {
  workspaceProfile?: WorkspaceProfile | undefined;
}

export interface UpdateWorkspaceProfileRequest {
  /** System info is the updated data. */
  workspaceProfile?: WorkspaceProfile | undefined;
  updateMask?: string[] | undefined;
}

export interface UpdateWorkspaceProfileResponse {
  workspaceProfile?: WorkspaceProfile | undefined;
}

function createBaseWorkspaceProfile(): WorkspaceProfile {
  return {
    version: "",
    mode: "",
    allowRegistration: false,
    disablePasswordLogin: false,
    additionalScript: "",
    additionalStyle: "",
  };
}

export const WorkspaceProfile = {
  encode(message: WorkspaceProfile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.mode !== "") {
      writer.uint32(18).string(message.mode);
    }
    if (message.allowRegistration === true) {
      writer.uint32(24).bool(message.allowRegistration);
    }
    if (message.disablePasswordLogin === true) {
      writer.uint32(32).bool(message.disablePasswordLogin);
    }
    if (message.additionalScript !== "") {
      writer.uint32(42).string(message.additionalScript);
    }
    if (message.additionalStyle !== "") {
      writer.uint32(50).string(message.additionalStyle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WorkspaceProfile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWorkspaceProfile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.version = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mode = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.allowRegistration = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.disablePasswordLogin = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.additionalScript = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.additionalStyle = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<WorkspaceProfile>): WorkspaceProfile {
    return WorkspaceProfile.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<WorkspaceProfile>): WorkspaceProfile {
    const message = createBaseWorkspaceProfile();
    message.version = object.version ?? "";
    message.mode = object.mode ?? "";
    message.allowRegistration = object.allowRegistration ?? false;
    message.disablePasswordLogin = object.disablePasswordLogin ?? false;
    message.additionalScript = object.additionalScript ?? "";
    message.additionalStyle = object.additionalStyle ?? "";
    return message;
  },
};

function createBaseGetWorkspaceProfileRequest(): GetWorkspaceProfileRequest {
  return {};
}

export const GetWorkspaceProfileRequest = {
  encode(_: GetWorkspaceProfileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetWorkspaceProfileRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetWorkspaceProfileRequest();
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

  create(base?: DeepPartial<GetWorkspaceProfileRequest>): GetWorkspaceProfileRequest {
    return GetWorkspaceProfileRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<GetWorkspaceProfileRequest>): GetWorkspaceProfileRequest {
    const message = createBaseGetWorkspaceProfileRequest();
    return message;
  },
};

function createBaseGetWorkspaceProfileResponse(): GetWorkspaceProfileResponse {
  return { workspaceProfile: undefined };
}

export const GetWorkspaceProfileResponse = {
  encode(message: GetWorkspaceProfileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.workspaceProfile !== undefined) {
      WorkspaceProfile.encode(message.workspaceProfile, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetWorkspaceProfileResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetWorkspaceProfileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.workspaceProfile = WorkspaceProfile.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GetWorkspaceProfileResponse>): GetWorkspaceProfileResponse {
    return GetWorkspaceProfileResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetWorkspaceProfileResponse>): GetWorkspaceProfileResponse {
    const message = createBaseGetWorkspaceProfileResponse();
    message.workspaceProfile = (object.workspaceProfile !== undefined && object.workspaceProfile !== null)
      ? WorkspaceProfile.fromPartial(object.workspaceProfile)
      : undefined;
    return message;
  },
};

function createBaseUpdateWorkspaceProfileRequest(): UpdateWorkspaceProfileRequest {
  return { workspaceProfile: undefined, updateMask: undefined };
}

export const UpdateWorkspaceProfileRequest = {
  encode(message: UpdateWorkspaceProfileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.workspaceProfile !== undefined) {
      WorkspaceProfile.encode(message.workspaceProfile, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateWorkspaceProfileRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateWorkspaceProfileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.workspaceProfile = WorkspaceProfile.decode(reader, reader.uint32());
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

  create(base?: DeepPartial<UpdateWorkspaceProfileRequest>): UpdateWorkspaceProfileRequest {
    return UpdateWorkspaceProfileRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateWorkspaceProfileRequest>): UpdateWorkspaceProfileRequest {
    const message = createBaseUpdateWorkspaceProfileRequest();
    message.workspaceProfile = (object.workspaceProfile !== undefined && object.workspaceProfile !== null)
      ? WorkspaceProfile.fromPartial(object.workspaceProfile)
      : undefined;
    message.updateMask = object.updateMask ?? undefined;
    return message;
  },
};

function createBaseUpdateWorkspaceProfileResponse(): UpdateWorkspaceProfileResponse {
  return { workspaceProfile: undefined };
}

export const UpdateWorkspaceProfileResponse = {
  encode(message: UpdateWorkspaceProfileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.workspaceProfile !== undefined) {
      WorkspaceProfile.encode(message.workspaceProfile, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateWorkspaceProfileResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateWorkspaceProfileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.workspaceProfile = WorkspaceProfile.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<UpdateWorkspaceProfileResponse>): UpdateWorkspaceProfileResponse {
    return UpdateWorkspaceProfileResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateWorkspaceProfileResponse>): UpdateWorkspaceProfileResponse {
    const message = createBaseUpdateWorkspaceProfileResponse();
    message.workspaceProfile = (object.workspaceProfile !== undefined && object.workspaceProfile !== null)
      ? WorkspaceProfile.fromPartial(object.workspaceProfile)
      : undefined;
    return message;
  },
};

export type WorkspaceServiceDefinition = typeof WorkspaceServiceDefinition;
export const WorkspaceServiceDefinition = {
  name: "WorkspaceService",
  fullName: "memos.api.v2.WorkspaceService",
  methods: {
    /** GetWorkspaceProfile returns the workspace profile. */
    getWorkspaceProfile: {
      name: "GetWorkspaceProfile",
      requestType: GetWorkspaceProfileRequest,
      requestStream: false,
      responseType: GetWorkspaceProfileResponse,
      responseStream: false,
      options: {
        _unknownFields: {
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
              119,
              111,
              114,
              107,
              115,
              112,
              97,
              99,
              101,
              47,
              112,
              114,
              111,
              102,
              105,
              108,
              101,
            ]),
          ],
        },
      },
    },
    /** UpdateWorkspaceProfile updates the workspace profile. */
    updateWorkspaceProfile: {
      name: "UpdateWorkspaceProfile",
      requestType: UpdateWorkspaceProfileRequest,
      requestStream: false,
      responseType: UpdateWorkspaceProfileResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [
            new Uint8Array([
              29,
              119,
              111,
              114,
              107,
              115,
              112,
              97,
              99,
              101,
              95,
              112,
              114,
              111,
              102,
              105,
              108,
              101,
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
              46,
              58,
              17,
              119,
              111,
              114,
              107,
              115,
              112,
              97,
              99,
              101,
              95,
              112,
              114,
              111,
              102,
              105,
              108,
              101,
              50,
              25,
              47,
              97,
              112,
              105,
              47,
              118,
              50,
              47,
              119,
              111,
              114,
              107,
              115,
              112,
              97,
              99,
              101,
              47,
              112,
              114,
              111,
              102,
              105,
              108,
              101,
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
