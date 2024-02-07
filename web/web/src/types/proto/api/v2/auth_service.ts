/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { User } from "./user_service";

export const protobufPackage = "memos.api.v2";

export interface GetAuthStatusRequest {
}

export interface GetAuthStatusResponse {
  user?: User | undefined;
}

export interface SignInRequest {
  username: string;
  password: string;
  neverExpire: boolean;
}

export interface SignInResponse {
  user?: User | undefined;
}

export interface SignInWithSSORequest {
  idpId: number;
  code: string;
  redirectUri: string;
}

export interface SignInWithSSOResponse {
  user?: User | undefined;
}

export interface SignUpRequest {
  username: string;
  password: string;
}

export interface SignUpResponse {
  user?: User | undefined;
}

export interface SignOutRequest {
}

export interface SignOutResponse {
}

function createBaseGetAuthStatusRequest(): GetAuthStatusRequest {
  return {};
}

export const GetAuthStatusRequest = {
  encode(_: GetAuthStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAuthStatusRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthStatusRequest();
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

  create(base?: DeepPartial<GetAuthStatusRequest>): GetAuthStatusRequest {
    return GetAuthStatusRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<GetAuthStatusRequest>): GetAuthStatusRequest {
    const message = createBaseGetAuthStatusRequest();
    return message;
  },
};

function createBaseGetAuthStatusResponse(): GetAuthStatusResponse {
  return { user: undefined };
}

export const GetAuthStatusResponse = {
  encode(message: GetAuthStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAuthStatusResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = User.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GetAuthStatusResponse>): GetAuthStatusResponse {
    return GetAuthStatusResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetAuthStatusResponse>): GetAuthStatusResponse {
    const message = createBaseGetAuthStatusResponse();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseSignInRequest(): SignInRequest {
  return { username: "", password: "", neverExpire: false };
}

export const SignInRequest = {
  encode(message: SignInRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    if (message.neverExpire === true) {
      writer.uint32(24).bool(message.neverExpire);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignInRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.username = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.neverExpire = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SignInRequest>): SignInRequest {
    return SignInRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SignInRequest>): SignInRequest {
    const message = createBaseSignInRequest();
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    message.neverExpire = object.neverExpire ?? false;
    return message;
  },
};

function createBaseSignInResponse(): SignInResponse {
  return { user: undefined };
}

export const SignInResponse = {
  encode(message: SignInResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignInResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = User.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SignInResponse>): SignInResponse {
    return SignInResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SignInResponse>): SignInResponse {
    const message = createBaseSignInResponse();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseSignInWithSSORequest(): SignInWithSSORequest {
  return { idpId: 0, code: "", redirectUri: "" };
}

export const SignInWithSSORequest = {
  encode(message: SignInWithSSORequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.idpId !== 0) {
      writer.uint32(8).int32(message.idpId);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    if (message.redirectUri !== "") {
      writer.uint32(26).string(message.redirectUri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignInWithSSORequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignInWithSSORequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.idpId = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.code = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.redirectUri = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SignInWithSSORequest>): SignInWithSSORequest {
    return SignInWithSSORequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SignInWithSSORequest>): SignInWithSSORequest {
    const message = createBaseSignInWithSSORequest();
    message.idpId = object.idpId ?? 0;
    message.code = object.code ?? "";
    message.redirectUri = object.redirectUri ?? "";
    return message;
  },
};

function createBaseSignInWithSSOResponse(): SignInWithSSOResponse {
  return { user: undefined };
}

export const SignInWithSSOResponse = {
  encode(message: SignInWithSSOResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignInWithSSOResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignInWithSSOResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = User.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SignInWithSSOResponse>): SignInWithSSOResponse {
    return SignInWithSSOResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SignInWithSSOResponse>): SignInWithSSOResponse {
    const message = createBaseSignInWithSSOResponse();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseSignUpRequest(): SignUpRequest {
  return { username: "", password: "" };
}

export const SignUpRequest = {
  encode(message: SignUpRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignUpRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignUpRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.username = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SignUpRequest>): SignUpRequest {
    return SignUpRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SignUpRequest>): SignUpRequest {
    const message = createBaseSignUpRequest();
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseSignUpResponse(): SignUpResponse {
  return { user: undefined };
}

export const SignUpResponse = {
  encode(message: SignUpResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignUpResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignUpResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = User.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SignUpResponse>): SignUpResponse {
    return SignUpResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SignUpResponse>): SignUpResponse {
    const message = createBaseSignUpResponse();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseSignOutRequest(): SignOutRequest {
  return {};
}

export const SignOutRequest = {
  encode(_: SignOutRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignOutRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignOutRequest();
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

  create(base?: DeepPartial<SignOutRequest>): SignOutRequest {
    return SignOutRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<SignOutRequest>): SignOutRequest {
    const message = createBaseSignOutRequest();
    return message;
  },
};

function createBaseSignOutResponse(): SignOutResponse {
  return {};
}

export const SignOutResponse = {
  encode(_: SignOutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignOutResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignOutResponse();
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

  create(base?: DeepPartial<SignOutResponse>): SignOutResponse {
    return SignOutResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<SignOutResponse>): SignOutResponse {
    const message = createBaseSignOutResponse();
    return message;
  },
};

export type AuthServiceDefinition = typeof AuthServiceDefinition;
export const AuthServiceDefinition = {
  name: "AuthService",
  fullName: "memos.api.v2.AuthService",
  methods: {
    /** GetAuthStatus returns the current auth status of the user. */
    getAuthStatus: {
      name: "GetAuthStatus",
      requestType: GetAuthStatusRequest,
      requestStream: false,
      responseType: GetAuthStatusResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            new Uint8Array([
              21,
              34,
              19,
              47,
              97,
              112,
              105,
              47,
              118,
              50,
              47,
              97,
              117,
              116,
              104,
              47,
              115,
              116,
              97,
              116,
              117,
              115,
            ]),
          ],
        },
      },
    },
    /** SignIn signs in the user with the given username and password. */
    signIn: {
      name: "SignIn",
      requestType: SignInRequest,
      requestStream: false,
      responseType: SignInResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            new Uint8Array([
              21,
              34,
              19,
              47,
              97,
              112,
              105,
              47,
              118,
              50,
              47,
              97,
              117,
              116,
              104,
              47,
              115,
              105,
              103,
              110,
              105,
              110,
            ]),
          ],
        },
      },
    },
    /** SignInWithSSO signs in the user with the given SSO code. */
    signInWithSSO: {
      name: "SignInWithSSO",
      requestType: SignInWithSSORequest,
      requestStream: false,
      responseType: SignInWithSSOResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            new Uint8Array([
              25,
              34,
              23,
              47,
              97,
              112,
              105,
              47,
              118,
              50,
              47,
              97,
              117,
              116,
              104,
              47,
              115,
              105,
              103,
              110,
              105,
              110,
              47,
              115,
              115,
              111,
            ]),
          ],
        },
      },
    },
    /** SignUp signs up the user with the given username and password. */
    signUp: {
      name: "SignUp",
      requestType: SignUpRequest,
      requestStream: false,
      responseType: SignUpResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            new Uint8Array([
              21,
              34,
              19,
              47,
              97,
              112,
              105,
              47,
              118,
              50,
              47,
              97,
              117,
              116,
              104,
              47,
              115,
              105,
              103,
              110,
              117,
              112,
            ]),
          ],
        },
      },
    },
    /** SignOut signs out the user. */
    signOut: {
      name: "SignOut",
      requestType: SignOutRequest,
      requestStream: false,
      responseType: SignOutResponse,
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
              97,
              117,
              116,
              104,
              47,
              115,
              105,
              103,
              110,
              111,
              117,
              116,
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
