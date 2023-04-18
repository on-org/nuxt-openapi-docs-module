export type OpenAPI = OpenAPIObject30 | OpenAPIObject31 | SwaggerObject20 | SwaggerObject21;
interface OpenAPIObject31 {
    openapi: string;
    servers?: ServerObject[];
    info: InfoObject31;
    paths: PathsObject31;
    components?: ComponentsObject31;
    security?: SecurityRequirementObject[];
    tags?: TagObject[];
    externalDocs?: ExternalDocumentationObject;
    definitions?: undefined;
}
interface OpenAPIObject30 {
    openapi: string;
    info: InfoObject30;
    paths: PathsObject30;
    components?: ComponentsObject30;
    security?: SecurityRequirementObject[];
    tags?: TagObject[];
    externalDocs?: ExternalDocumentationObject;
    definitions?: undefined;
}
interface SwaggerObject21 {
    swagger: string;
    info: InfoObject21;
    paths: PathsObject21;
    definitions?: DefinitionsObject;
    parameters?: ParametersDefinitionsObject;
    responses?: ResponsesDefinitionsObject;
    securityDefinitions?: SecurityDefinitionsObject;
    tags?: TagObject[];
    externalDocs?: ExternalDocumentationObject;
    components?: undefined;
}
interface SwaggerObject20 {
    swagger: string;
    info: InfoObject20;
    host?: string;
    basePath?: string;
    schemes?: string[];
    consumes?: string[];
    produces?: string[];
    paths: PathsObject20;
    definitions?: DefinitionsObject;
    parameters?: ParametersDefinitionsObject;
    responses?: ResponsesDefinitionsObject;
    securityDefinitions?: SecurityDefinitionsObject;
    security?: SecurityRequirementObject[];
    tags?: TagObject[];
    externalDocs?: ExternalDocumentationObject;
    components?: undefined;
}
interface InfoObject31 {
    title: string;
    description?: string;
    version: string;
    termsOfService?: string;
    contact?: {
        name?: string;
        url?: string;
        email?: string;
        [key: `x-${string}-${string}`]: string | undefined;
    };
    license?: {
        name: string;
        url?: string;
        [key: `x-${string}-${string}`]: string | undefined;
    };
    'x-locales'?: {
        [key: string]: string;
    };
    [key: `x-${string}-${string}`]: string | undefined;
}
interface PathsObject31 {
    [path: string]: {
        [method: string]: {
            tags?: string[];
            summary?: string;
            description?: string;
            operationId?: string;
            parameters?: (ParameterObject | ReferenceObject)[];
            requestBody?: RequestBodyObject | ReferenceObject;
            responses: {
                [statusCode: string]: ResponseObject | ReferenceObject;
            };
            callbacks?: {
                [name: string]: CallbackObject | ReferenceObject;
            };
            deprecated?: boolean;
            security?: SecurityRequirementObject[];
            servers?: ServerObject[];
            [key: `x-${string}-${string}`]: string | undefined;
        };
    };
}
interface ComponentsObject31 {
    schemas?: {
        [name: string]: SchemaObject | ReferenceObject;
    };
    responses?: {
        [name: string]: ResponseObject | ReferenceObject;
    };
    parameters?: {
        [name: string]: ParameterObject | ReferenceObject;
    };
    examples?: {
        [name: string]: ExampleObject | ReferenceObject;
    };
    requestBodies?: {
        [name: string]: RequestBodyObject | ReferenceObject;
    };
    headers?: {
        [name: string]: HeaderObject | ReferenceObject;
    };
    securitySchemes?: {
        [name: string]: SecuritySchemeObject | ReferenceObject;
    };
    links?: {
        [name: string]: LinkObject | ReferenceObject;
    };
    callbacks?: {
        [name: string]: CallbackObject | ReferenceObject;
    };
}
interface SecurityRequirementObject {
    [name: string]: string[];
}
interface TagObject {
    name: string;
    description?: string;
    [key: `x-${string}-${string}`]: string | undefined;
}
interface ExternalDocumentationObject {
    description?: string;
    url: string;
    [key: `x-${string}-${string}`]: string | undefined;
}
interface ServerObject {
    url: string;
    description?: string;
    variables?: {
        [variable: string]: ServerVariableObject;
    };
    [key: `x-${string}-${string}`]: string | undefined;
}
interface ServerVariableObject {
    enum?: string[];
    default: string;
    description?: string;
    [key: `x-${string}-${string}`]: string | undefined;
}
interface InfoObject30 {
    title: string;
    version: string;
    description?: string;
    termsOfService?: string;
    contact?: ContactObject;
    license?: LicenseObject;
    [key: `x-${string}-${string}`]: string | undefined;
    'x-locales'?: {
        [key: string]: string;
    };
}
interface PathsObject30 {
    [path: string]: PathItemObject30 | ReferenceObject | undefined;
}
interface PathItemObject30 {
    summary?: string;
    description?: string;
    get?: OperationObject30;
    put?: OperationObject30;
    post?: OperationObject30;
    delete?: OperationObject30;
    options?: OperationObject30;
    head?: OperationObject30;
    patch?: OperationObject30;
    trace?: OperationObject30;
    servers?: ServerObject[];
    parameters?: (ParameterObject30 | ReferenceObject)[];
    [key: `x-${string}-${string}`]: string | undefined;
}
interface OperationObject30 {
    tags?: string[];
    summary?: string;
    description?: string;
    externalDocs?: ExternalDocumentationObject;
    operationId?: string;
    parameters?: (ParameterObject30 | ReferenceObject)[];
    requestBody?: RequestBodyObject | ReferenceObject;
    responses: ResponsesObject;
    callbacks?: {
        [callbackName: string]: CallbackObject | ReferenceObject;
    };
    deprecated?: boolean;
    security?: SecurityRequirementObject[];
    servers?: ServerObject[];
    [key: `x-${string}-${string}`]: string | undefined;
}
interface ParameterObject30 {
    name: string;
    in: ParameterLocation;
    description?: string;
    required?: boolean;
    deprecated?: boolean;
    allowEmptyValue?: boolean;
    style?: ParameterStyle;
    explode?: boolean;
    allowReserved?: boolean;
    schema?: SchemaObject30 | ReferenceObject;
    example?: any;
    examples?: {
        [exampleName: string]: ExampleObject | ReferenceObject;
    };
    content?: {
        [mediaType: string]: MediaTypeObject;
    };
    [key: `x-${string}-${string}`]: string | undefined;
}
type ParameterLocation = "query" | "header" | "path" | "cookie";
type ParameterStyle = "matrix" | "label" | "form" | "simple" | "spaceDelimited" | "pipeDelimited" | "deepObject";
interface MediaTypeObject {
    schema?: ReferenceObject | SchemaObject30;
    example?: string;
    examples?: {
        [exampleName: string]: ReferenceObject | ExampleObject;
    };
    encoding?: {
        [propertyName: string]: EncodingObject;
    };
}
interface EncodingObject {
    contentType?: string;
    headers?: {
        [headerName: string]: ReferenceObject | HeaderObject30;
    };
    style?: string;
    explode?: boolean;
    allowReserved?: boolean;
}
interface HeaderObject30 {
    description?: string;
    required?: boolean;
    deprecated?: boolean;
    allowEmptyValue?: boolean;
    style?: string;
    explode?: boolean;
    schema?: ReferenceObject | SchemaObject30;
    example?: any;
    examples?: {
        [exampleName: string]: ReferenceObject | ExampleObject;
    };
    [key: `x-${string}-${string}`]: string | undefined;
}
interface SchemaObject30 {
    title?: string;
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: boolean;
    minimum?: number;
    exclusiveMinimum?: boolean;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
    maxProperties?: number;
    minProperties?: number;
    required?: string[];
    enum?: any[];
    type?: string;
    allOf?: ReferenceObject[] | SchemaObject30[];
    oneOf?: ReferenceObject[] | SchemaObject30[];
    anyOf?: ReferenceObject[] | SchemaObject30[];
    not?: ReferenceObject | SchemaObject30;
    items?: ReferenceObject | SchemaObject30;
    properties?: {
        [propertyName: string]: ReferenceObject | SchemaObject30;
    };
    additionalProperties?: boolean | ReferenceObject | SchemaObject30;
    description?: string;
    format?: string;
    default?: any;
    nullable?: boolean;
    discriminator?: DiscriminatorObject;
    readOnly?: boolean;
    writeOnly?: boolean;
    xml?: XMLObject;
    externalDocs?: ExternalDocumentationObject;
    example?: any;
    deprecated?: boolean;
    [key: `x-${string}-${string}`]: string | undefined;
}
interface DiscriminatorObject {
    propertyName: string;
    mapping?: {
        [value: string]: string;
    };
}
interface XMLObject {
    name?: string;
    namespace?: string;
    prefix?: string;
    attribute?: boolean;
    wrapped?: boolean;
    [key: `x-${string}-${string}`]: string | undefined;
}
interface ComponentsObject30 {
    schemas?: {
        [key: string]: SchemaObject30 | ReferenceObject;
    };
    responses?: {
        [key: string]: ResponseObject | ReferenceObject;
    };
    parameters?: {
        [key: string]: ParameterObject | ReferenceObject;
    };
    examples?: {
        [key: string]: ExampleObject | ReferenceObject;
    };
    requestBodies?: {
        [key: string]: RequestBodyObject | ReferenceObject;
    };
    headers?: {
        [key: string]: HeaderObject | ReferenceObject;
    };
    securitySchemes?: {
        [key: string]: SecuritySchemeObject | ReferenceObject;
    };
    links?: {
        [key: string]: LinkObject | ReferenceObject;
    };
    callbacks?: {
        [key: string]: CallbackObject | ReferenceObject;
    };
}
interface OpenAPIObject30 {
    openapi: string;
    info: InfoObject30;
    paths: PathsObject30;
    components?: ComponentsObject30;
    security?: SecurityRequirementObject[];
    tags?: TagObject[];
    externalDocs?: ExternalDocumentationObject;
}
interface InfoObject21 {
    title: string;
    version: string;
    description?: string;
    termsOfService?: string;
    contact?: ContactObject;
    license?: LicenseObject;
    [key: `x-${string}-${string}`]: string | undefined;
}
interface PathsObject21 {
    [path: string]: PathItemObject21 | ReferenceObject | undefined;
}
interface PathItemObject21 {
    get?: OperationObject;
    put?: OperationObject;
    post?: OperationObject;
    delete?: OperationObject;
    options?: OperationObject;
    head?: OperationObject;
    patch?: OperationObject;
    parameters?: (ParameterObject | ReferenceObject)[];
}
interface OperationObject {
    tags?: string[];
    summary?: string;
    description?: string;
    externalDocs?: ExternalDocumentationObject;
    operationId?: string;
    consumes?: string[];
    produces?: string[];
    parameters?: (ParameterObject | ReferenceObject)[];
    responses: ResponsesObject;
    schemes?: string[];
    deprecated?: boolean;
    security?: SecurityRequirementObject[];
    [key: `x-${string}-${string}`]: string | undefined;
}
interface ResponsesObject {
    default?: ResponseObject | ReferenceObject | undefined;
    [status: string]: ResponseObject | ReferenceObject | undefined;
}
interface DefinitionsObject {
    [key: string]: SchemaObject | ReferenceObject;
}
interface ParametersDefinitionsObject {
    [key: string]: ParameterObject | ReferenceObject;
}
interface ResponsesDefinitionsObject {
    [key: string]: ResponseObject | ReferenceObject;
}
interface SecurityDefinitionsObject {
    [key: string]: SecuritySchemeObject;
}
interface SwaggerObject21 {
    swagger: string;
    info: InfoObject21;
    paths: PathsObject21;
    definitions?: DefinitionsObject;
    parameters?: ParametersDefinitionsObject;
    responses?: ResponsesDefinitionsObject;
    securityDefinitions?: SecurityDefinitionsObject;
    security?: SecurityRequirementObject[];
    tags?: TagObject[];
    externalDocs?: ExternalDocumentationObject;
    'x-locales'?: {
        [key: string]: string;
    };
}
interface InfoObject20 {
    title: string;
    version: string;
    description?: string;
    termsOfService?: string;
    contact?: ContactObject;
    license?: LicenseObject;
    [key: `x-${string}-${string}`]: string | undefined;
    'x-locales'?: {
        [key: string]: string;
    };
}
interface PathsObject20 {
    [path: string]: PathItemObject20 | ReferenceObject;
}
interface PathItemObject20 {
    get?: OperationObject;
    put?: OperationObject;
    post?: OperationObject;
    delete?: OperationObject;
    options?: OperationObject;
    head?: OperationObject;
    patch?: OperationObject;
    parameters?: (ParameterObject | ReferenceObject)[];
}
interface SwaggerObject20 {
    swagger: string;
    info: InfoObject20;
    paths: PathsObject20;
    definitions?: DefinitionsObject;
    parameters?: ParametersDefinitionsObject;
    responses?: ResponsesDefinitionsObject;
    securityDefinitions?: SecurityDefinitionsObject;
    security?: SecurityRequirementObject[];
    tags?: TagObject[];
    externalDocs?: ExternalDocumentationObject;
}
interface ParameterObject {
    name: string;
    in: string;
    description?: string;
    required?: boolean;
    deprecated?: boolean;
    allowEmptyValue?: boolean;
    style?: string;
    explode?: boolean;
    allowReserved?: boolean;
    schema?: SchemaObject | ReferenceObject;
    example?: any;
    examples?: {
        [media: string]: ExampleObject | ReferenceObject;
    };
    content?: {
        [media: string]: MediaTypeObject;
    };
    [key: `x-${string}-${string}`]: string | undefined;
}
interface ReferenceObject {
    $ref: string;
}
interface RequestBodyObject {
    description?: string;
    content: {
        [media: string]: MediaTypeObject;
    };
    required?: boolean;
    [key: `x-${string}-${string}`]: string | undefined;
}
interface ResponseObject {
    description: string;
    headers?: {
        [headerName: string]: HeaderObject | ReferenceObject;
    };
    content?: {
        [media: string]: MediaTypeObject;
    };
    links?: {
        [linkName: string]: LinkObject | ReferenceObject;
    };
    [key: `x-${string}-${string}`]: string | undefined;
}
interface CallbackObject {
    [expression: string]: PathItemObject | ReferenceObject;
}
interface PathItemObject {
    summary?: string;
    description?: string;
    get?: OperationObject;
    put?: OperationObject;
    post?: OperationObject;
    delete?: OperationObject;
    options?: OperationObject;
    head?: OperationObject;
    patch?: OperationObject;
    trace?: OperationObject;
    servers?: ServerObject[];
    parameters?: (ParameterObject | ReferenceObject)[];
    [key: `x-${string}-${string}`]: string | undefined;
}
interface SchemaObject {
    nullable?: boolean;
    discriminator?: DiscriminatorObject;
    readOnly?: boolean;
    writeOnly?: boolean;
    xml?: XMLObject;
    externalDocs?: ExternalDocumentationObject;
    example?: any;
    examples?: {
        [media: string]: ExampleObject | ReferenceObject;
    };
    deprecated?: boolean;
    type?: string;
    allOf?: (SchemaObject | ReferenceObject)[];
    oneOf?: (SchemaObject | ReferenceObject)[];
    anyOf?: (SchemaObject | ReferenceObject)[];
    not?: SchemaObject | ReferenceObject;
    items?: SchemaObject | ReferenceObject;
    properties?: {
        [propertyName: string]: SchemaObject | ReferenceObject;
    };
    additionalProperties?: boolean | SchemaObject | ReferenceObject;
    description?: string;
    format?: string;
    default?: any;
    title?: string;
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: boolean;
    minimum?: number;
    exclusiveMinimum?: boolean;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
    maxProperties?: number;
    minProperties?: number;
    required?: string[];
    enum?: any[];
    [key: `x-${string}-${string}`]: string | undefined;
}
interface ExampleObject {
    summary?: string;
    description?: string;
    value?: any;
    externalValue?: string;
    [key: `x-${string}-${string}`]: string | undefined;
}
interface HeaderObject {
    description?: string;
    required?: boolean;
    deprecated?: boolean;
    allowEmptyValue?: boolean;
    style?: string;
    explode?: boolean;
    allowReserved?: boolean;
    schema?: SchemaObject | ReferenceObject;
    example?: any;
    examples?: {
        [media: string]: ExampleObject | ReferenceObject;
    };
    [key: `x-${string}-${string}`]: string | undefined;
}
interface SecuritySchemeObject {
    type: string;
    description?: string;
    name?: string;
    in?: string;
    scheme?: string;
    bearerFormat?: string;
    flows?: OAuthFlowsObject;
    openIdConnectUrl?: string;
    [key: `x-${string}-${string}`]: string | undefined;
}
interface OAuthFlowsObject {
    implicit?: OAuthFlowObject;
    password?: OAuthFlowObject;
    clientCredentials?: OAuthFlowObject;
    authorizationCode?: OAuthFlowObject;
}
interface OAuthFlowObject {
    authorizationUrl: string;
    tokenUrl: string;
    refreshUrl?: string;
    scopes: {
        [scopeName: string]: string;
    };
}
interface LinkObject {
    operationRef?: string;
    operationId?: string;
    parameters?: {
        [parameterName: string]: any;
    };
    requestBody?: any;
    description?: string;
    server?: ServerObject;
}
interface ContactObject {
    name?: string;
    url?: string;
    email?: string;
    [key: `x-${string}-${string}`]: string | undefined;
}
interface LicenseObject {
    name: string;
    url?: string;
    [key: `x-${string}-${string}`]: string | undefined;
}
export {};
