
    const schema = {
  "asyncapi": "2.5.0",
  "info": {
    "title": "unit-variables",
    "description": "Specification for variables as part of the unit data.",
    "license": {
      "name": "CC0 1.0",
      "url": "https://creativecommons.org/publicdomain/zero/1.0/"
    },
    "version": " - click on schema id to expand",
    "contact": {
      "name": "Home of iqb-specifications (German only)",
      "url": "https://iqb-specifications.github.io/"
    }
  },
  "channels": {
    "iqb_data_structures": {
      "subscribe": {
        "operationId": "Please select one schema",
        "message": {
          "messageId": "select_schema",
          "x-parser-message-name": "select_schema"
        }
      }
    }
  },
  "components": {
    "schemas": {
      "metadata-values": {
        "$id": "unit-variables@0.1",
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Unit Variables.",
        "description": "Specification for variables as part of the unit data.",
        "type": "object",
        "properties": {
          "baseVariables": {
            "description": "All variables set via editor modul",
            "type": "array",
            "items": {
              "$id": "verona-variable-info@2.0",
              "$schema": "http://json-schema.org/draft-07/schema#",
              "title": "Infos of a base variable to support link to item and coding",
              "type": "object",
              "properties": {
                "id": {
                  "type": "string",
                  "pattern": "^[0-9a-zA-Z_]+$",
                  "description": "Identifier for the variable",
                  "x-parser-schema-id": "<anonymous-schema-2>"
                },
                "alias": {
                  "type": "string",
                  "pattern": "^[0-9a-zA-Z_]+$",
                  "description": "Alternative identifier for the variable",
                  "x-parser-schema-id": "<anonymous-schema-3>"
                },
                "type": {
                  "type": "string",
                  "enum": [
                    "STRING",
                    "INTEGER",
                    "NUMBER",
                    "BOOLEAN",
                    "ATTACHMENT",
                    "JSON",
                    "NO_VALUE",
                    "CODED"
                  ],
                  "description": "Data type of the variable value",
                  "x-parser-schema-id": "<anonymous-schema-4>"
                },
                "format": {
                  "type": "string",
                  "enum": [
                    "TEXT_SELECTION",
                    "IMAGE",
                    "CAPTURE_IMAGE",
                    "AUDIO",
                    "GGB_FILE",
                    "NON_NEGATIVE",
                    "LATEX",
                    "MATH_ML",
                    "MATH_TABLE",
                    "MATH_TEXT_MIX",
                    "GGB_VARIABLE",
                    ""
                  ],
                  "description": "Data type format",
                  "x-parser-schema-id": "<anonymous-schema-5>"
                },
                "multiple": {
                  "type": "boolean",
                  "default": false,
                  "description": "Can the value be of type Array?",
                  "x-parser-schema-id": "<anonymous-schema-6>"
                },
                "nullable": {
                  "type": "boolean",
                  "default": false,
                  "description": "Can the value be null?",
                  "x-parser-schema-id": "<anonymous-schema-7>"
                },
                "values": {
                  "type": "array",
                  "description": "List of possible values",
                  "items": {
                    "type": "object",
                    "properties": {
                      "value": {
                        "type": [
                          "string",
                          "number",
                          "boolean"
                        ],
                        "x-parser-schema-id": "<anonymous-schema-10>"
                      },
                      "label": {
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-11>"
                      }
                    },
                    "additionalProperties": false,
                    "required": [
                      "value"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-9>"
                  },
                  "x-parser-schema-id": "<anonymous-schema-8>"
                },
                "valuePositionLabels": {
                  "type": "array",
                  "description": "Labels of the positions if the value is of type array",
                  "items": {
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-13>"
                  },
                  "x-parser-schema-id": "<anonymous-schema-12>"
                },
                "valuesComplete": {
                  "type": "boolean",
                  "default": false,
                  "description": "Are the given values all possible values?",
                  "x-parser-schema-id": "<anonymous-schema-14>"
                }
              },
              "additionalProperties": false,
              "required": [
                "id",
                "type"
              ]
            },
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "derivedVariables": {
            "description": "All derived variables set by schemer module",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string",
                  "description": "Id of the derived variable",
                  "x-parser-schema-id": "<anonymous-schema-17>"
                },
                "basedOn": {
                  "type": "array",
                  "items": {
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-19>"
                  },
                  "x-parser-schema-id": "<anonymous-schema-18>"
                }
              },
              "required": [
                "id",
                "basedOn"
              ],
              "additionalProperties": false,
              "x-parser-schema-id": "<anonymous-schema-16>"
            },
            "x-parser-schema-id": "<anonymous-schema-15>"
          }
        },
        "additionalProperties": false,
        "$defs": {
          "varInfo": "$ref:$.components.schemas.metadata-values.properties.baseVariables.items"
        },
        "x-parser-schema-id": "unit-variables@0.1"
      }
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 3,
  "x-parser-spec-stringified": true
};
    const config = {"show":{"sidebar":false},"sidebar":{"showOperations":"byDefault"},"showOperations":false};
    const appRoot = document.getElementById('root');
    AsyncApiStandalone.render(
        { schema, config, }, appRoot
    );
  