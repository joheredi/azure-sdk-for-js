import { Serializer } from "@azure/core-http";
import { AttestationResult } from "../../src/generated/models/mappers";
import { AttestationResult as AttestationResultModel } from "../../src/generated/models";
import { assert } from "chai";

describe("Serialization samples", () => {
  it("should serialize", () => {
    const attestationResult: AttestationResultModel = { version: "one" };
    const serializer = new Serializer({ AttestationResult });
    const serialized = serializer.serialize(AttestationResult, attestationResult);

    assert.equal(attestationResult.version, serialized["x-ms-ver"]);
  });

  it("should deserialize", () => {
    const serialized = { "x-ms-ver": "one" };
    const serializer = new Serializer({ AttestationResult });

    const deserialized: AttestationResultModel = serializer.deserialize(
      AttestationResult,
      serialized,
      "attestationResult"
    );

    assert.equal(deserialized.version, serialized["x-ms-ver"]);
  });
});
