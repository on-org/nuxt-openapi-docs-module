import * as yaml from 'js-yaml';
import * as fs from 'fs';

type OpenAPI = OpenAPIObject30 | OpenAPIObject31 | SwaggerObject20 | SwaggerObject21;

export default class OpenAPILoader {
  private readonly filename: string;
  private data: any = null;

  constructor(filename: string) {
    this.filename = filename;
  }

  public load() {
    const contents = fs.readFileSync(this.filename, 'utf8');
    this.data = yaml.safeLoad(contents);
  }

  public json(): OpenAPI {
    if (!this.data) {
      throw new Error('Unloaded OpenAPI');
    }

    if (this.isSwaggerObject20(this.data)) {
      return this.data as SwaggerObject20;
    }

    if (this.isSwaggerObject21(this.data)) {
      return this.data as SwaggerObject21;
    }

    if (this.isOpenAPIObject30(this.data)) {
      return this.data as OpenAPIObject30;
    }

    if (this.isOpenAPIObject31(this.data)) {
      return this.data as OpenAPIObject31;
    }
    throw new Error('Unsupported OpenAPI version');
  }


  public isSwaggerObject21(data: any): data is SwaggerObject21 {
    return data.swagger === '2.1';
  }
  public isSwaggerObject20(data: any): data is SwaggerObject20 {
    return data.swagger === '2.0';
  }

  public isOpenAPIObject30(data: any): data is OpenAPIObject30 {
    return data.openapi?.startsWith('3.0');
  }

  public isOpenAPIObject31(data: any): data is OpenAPIObject31 {
    return data.openapi?.startsWith('3.1');
  }
}

// Интерфейс OpenAPI для версии 3.1
interface OpenAPIObject31 {
  openapi: string; // Версия OpenAPI, например "3.1.0" (обязательно)
  servers?: ServerObject[];  // Описание серверов, используемых для API
  info: InfoObject31; // Объект с информацией о версии API (обязательно)
  paths: PathsObject31; // Объект с описанием маршрутов API (обязательно)
  components?: ComponentsObject31; // Объект с описанием компонентов API, таких как схемы, параметры или ответы (опционально)
  security?: SecurityRequirementObject[]; // Массив объектов с требованиями безопасности, которые должны быть выполнены для доступа к API (опционально)
  tags?: TagObject[]; // Массив объектов с тегами, которые могут быть применены к маршрутам API (опционально)
  externalDocs?: ExternalDocumentationObject; // Объект с дополнительной документацией о API (опционально)
}

// Интерфейс OpenAPI для версии 3.0
interface OpenAPIObject30 {
  openapi: string; // Версия OpenAPI, например "3.0.0" (обязательно)
  info: InfoObject30; // Объект с информацией о версии API (обязательно)
  paths: PathsObject30; // Объект с описанием маршрутов API (обязательно)
  components?: ComponentsObject30; // Объект с описанием компонентов API, таких как схемы, параметры или ответы (опционально)
  security?: SecurityRequirementObject[]; // Массив объектов с требованиями безопасности, которые должны быть выполнены для доступа к API (опционально)
  tags?: TagObject[]; // Массив объектов с тегами, которые могут быть применены к маршрутам API (опционально)
  externalDocs?: ExternalDocumentationObject; // Объект с дополнительной документацией о API (опционально)
}

// Интерфейс OpenAPI для версии 2.1
interface SwaggerObject21 {
  swagger: string; // Версия Swagger, например "2.1" (обязательно)
  info: InfoObject21; // Объект с информацией о версии API (обязательно)
  paths: PathsObject21; // Объект с описанием маршрутов API (обязательно)
  definitions?: DefinitionsObject; // Объект с описанием схем данных, используемых в API (опционально)
  parameters?: ParametersDefinitionsObject; // Объект с описанием параметров, используемых в API (опционально)
  responses?: ResponsesDefinitionsObject; // Объект с описанием ответов, используемых в API (опционально)
  securityDefinitions?: SecurityDefinitionsObject; // Объект с описанием способов аутентификации и авторизации в API (опционально)
  tags?: TagObject[]; // Массив объектов с тегами, которые могут быть применены к маршрутам API (опционально)
  externalDocs?: ExternalDocumentationObject; // Объект с дополнительной документацией о API (опционально)
}

interface SwaggerObject20 {
  swagger: string; // Версия Swagger, например "2.0" (обязательно)
  info: InfoObject20; // Объект с информацией о версии API (обязательно)
  host?: string; // Имя хоста, на котором запущен API (опционально)
  basePath?: string; // Базовый путь, который будет добавлен ко всем маршрутам API (опционально)
  schemes?: string[]; // Массив протоколов, которые поддерживаются API (например, ["http", "https"]) (опционально)
  consumes?: string[]; // Массив MIME-типов, которые API может принимать в запросах (опционально)
  produces?: string[]; // Массив MIME-типов, которые API может возвращать в ответах (опционально)
  paths: PathsObject20; // Объект с описанием маршрутов API (обязательно)
  definitions?: DefinitionsObject; // Объект с описанием схем данных, используемых в API (опционально)
  parameters?: ParametersDefinitionsObject; // Объект с описанием параметров, используемых в API (опционально)
  responses?: ResponsesDefinitionsObject; // Объект с описанием ответов, используемых в API (опционально)
  securityDefinitions?: SecurityDefinitionsObject; // Объект с описанием способов аутентификации и авторизации в API (опционально)
  security?: SecurityRequirementObject[]; // Массив объектов с требованиями безопасности, которые должны быть выполнены для доступа к API (опционально)
  tags?: TagObject[]; // Массив объектов с тегами, которые могут быть применены к маршрутам API (опционально)
  externalDocs?: ExternalDocumentationObject; // Объект с дополнительной документацией о API (опционально)
}

interface InfoObject31 {
  title: string; // Название API
  description?: string; // Описание API
  version: string; // Версия API
  termsOfService?: string; // Условия использования API
  contact?: {
    name?: string; // Имя контактного лица
    url?: string; // URL контактного лица
    email?: string; // Email контактного лица
    [key: `x-${string}-${string}`]: string | undefined;
  };
  license?: {
    name: string; // Название лицензии
    url?: string; // URL лицензии
    [key: `x-${string}-${string}`]: string | undefined;
  };
  [key: `x-${string}-${string}`]: string | undefined;
}

interface PathsObject31 {
  [path: string]: {
    [method: string]: {
      tags?: string[]; // Теги для метода
      summary?: string; // Краткое описание метода
      description?: string; // Описание метода
      operationId?: string; // Идентификатор операции
      parameters?: (ParameterObject | ReferenceObject)[];
      requestBody?: RequestBodyObject | ReferenceObject;
      responses: {
        [statusCode: string]: ResponseObject | ReferenceObject;
      };
      callbacks?: {
        [name: string]: CallbackObject | ReferenceObject;
      };
      deprecated?: boolean; // Метод устарел
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
  [name: string]: string[]; // Имя схемы безопасности и список требуемых областей
}


interface TagObject {
  name: string; // Название тега
  description?: string; // Описание тега
  [key: `x-${string}-${string}`]: string | undefined;
}

interface ExternalDocumentationObject {
  description?: string; // Описание документации
  url: string; // URL документации
  [key: `x-${string}-${string}`]: string | undefined;
}

interface ServerObject {
  url: string; // URL сервера
  description?: string; // Описание сервера
  variables?: { [variable: string]: ServerVariableObject }; // Переменные сервера
  [key: `x-${string}-${string}`]: string | undefined;
}

interface ServerVariableObject {
  enum?: string[]; // Список доступных значений переменной
  default: string; // Значение переменной по умолчанию
  description?: string; // Описание переменной
  [key: `x-${string}-${string}`]: string | undefined;
}


interface InfoObject30 {
  title: string; // Название API
  version: string; // Версия API
  description?: string; // Описание API
  termsOfService?: string; // Условия использования API
  contact?: ContactObject; // Контактная информация для API
  license?: LicenseObject; // Лицензия для API
  [key: `x-${string}-${string}`]: string | undefined;
}

interface PathsObject30 {
  [path: string]: PathItemObject30 | ReferenceObject | undefined; // Описание маршрута
}

interface PathItemObject30 {
  summary?: string; // Краткое описание пути
  description?: string; // Подробное описание пути
  get?: OperationObject30; // Описание операции HTTP GET для данного пути
  put?: OperationObject30; // Описание операции HTTP PUT для данного пути
  post?: OperationObject30; // Описание операции HTTP POST для данного пути
  delete?: OperationObject30; // Описание операции HTTP DELETE для данного пути
  options?: OperationObject30; // Описание операции HTTP OPTIONS для данного пути
  head?: OperationObject30; // Описание операции HTTP HEAD для данного пути
  patch?: OperationObject30; // Описание операции HTTP PATCH для данного пути
  trace?: OperationObject30; // Описание операции HTTP TRACE для данного пути
  servers?: ServerObject[]; // Список серверов, на которых может быть размещен этот путь
  parameters?: (ParameterObject30 | ReferenceObject)[]; // Список параметров, применимых к всем операциям в этом пути
  [key: `x-${string}-${string}`]: string | undefined;
}

interface OperationObject30 {
  tags?: string[]; // Список тегов, связанных с этой операцией
  summary?: string; // Краткое описание операции
  description?: string; // Подробное описание операции
  externalDocs?: ExternalDocumentationObject; // Дополнительная документация для этой операции
  operationId?: string; // Уникальный идентификатор операции
  parameters?: (ParameterObject30 | ReferenceObject)[]; // Список параметров, применимых к этой операции
  requestBody?: RequestBodyObject | ReferenceObject; // Описание тела запроса для этой операции
  responses: ResponsesObject30; // Описание возможных ответов для этой операции
  callbacks?: { [callbackName: string]: CallbackObject | ReferenceObject }; // Список колбэков, связанных с этой операцией
  deprecated?: boolean; // Указывает, является ли операция устаревшей
  security?: SecurityRequirementObject[]; // Список требований безопасности для этой операции
  servers?: ServerObject[]; // Список серверов, на которых может быть размещена операция
  [key: `x-${string}-${string}`]: string | undefined;
}

interface ResponsesObject30 {
  default?: ResponseObject | ReferenceObject; // Описание ответа по умолчанию
  [httpStatusCode: string]: ResponseObject | ReferenceObject; // Описание ответов для каждого HTTP-статуса
}

interface ParameterObject30 {
  name: string; // Имя параметра
  in: ParameterLocation; // Место, где параметр будет передан
  description?: string; // Подробное описание параметра
  required?: boolean; // Указывает, является ли параметр обязательным
  deprecated?: boolean; // Указывает, является ли параметр устаревшим
  allowEmptyValue?: boolean; // Разрешает передавать пустое значение для параметра
  style?: ParameterStyle; // Форматирование параметра
  explode?: boolean; // Указывает, следует ли разбирать массив или объект параметра на отдельные значения
  allowReserved?: boolean; // Разрешает зарезервированные символы в параметре
  schema?: SchemaObject30 | ReferenceObject; // Описание схемы параметра
  example?: any; // Пример значения параметра
  examples?: { [exampleName: string]: ExampleObject | ReferenceObject }; // Список примеров значений параметра
  content?: { [mediaType: string]: MediaTypeObject }; // Список MIME-типов и объектов, описывающих содержимое параметра
  [key: `x-${string}-${string}`]: string | undefined;
}

type ParameterLocation = "query" | "header" | "path" | "cookie";
// Возможные значения для местоположения параметра

type ParameterStyle = "matrix" | "label" | "form" | "simple" | "spaceDelimited" | "pipeDelimited" | "deepObject";
// Возможные значения для стиля параметра

interface MediaTypeObject {
  schema?: ReferenceObject | SchemaObject30; // Схема, описывающая содержимое параметра
  example?: string; // Пример значения параметра
  examples?: { [exampleName: string]: ReferenceObject | ExampleObject }; // Список примеров для параметра
  encoding?: { [propertyName: string]: EncodingObject }; // Описание способов кодирования параметра
}

interface EncodingObject {
  contentType?: string; // MIME-тип кодирования
  headers?: { [headerName: string]: ReferenceObject | HeaderObject30 }; // Описание заголовков, используемых при кодировании
  style?: string; // Стиль кодирования параметра (например, "form" для формы или "simple" для простого значения)
  explode?: boolean; // Флаг, указывающий, должен ли параметр быть закодирован как массив значений
  allowReserved?: boolean; // Флаг, указывающий, разрешено ли резервирование параметра
}

interface HeaderObject30 {
  description?: string; // Описание заголовка
  required?: boolean; // Флаг, указывающий, является ли заголовок обязательным
  deprecated?: boolean; // Флаг, указывающий, устарел ли заголовок
  allowEmptyValue?: boolean; // Флаг, указывающий, разрешено ли пустое значение заголовка
  style?: string; // Стиль кодирования заголовка (например, "simple" или "form")
  explode?: boolean; // Флаг, указывающий, должен ли заголовок быть закодирован как массив значений
  schema?: ReferenceObject | SchemaObject30; // Схема, описывающая значение заголовка
  example?: any; // Пример значения заголовка
  examples?: { [exampleName: string]: ReferenceObject | ExampleObject }; // Список примеров для заголовка
  [key: `x-${string}-${string}`]: string | undefined;
}

interface SchemaObject30 {
  title?: string; // Название схемы
  multipleOf?: number; // Значение, на которое должно быть кратно значение параметра
  maximum?: number; // Максимальное значение параметра
  exclusiveMaximum?: boolean; // Указывает, включает ли максимальное значение параметра
  minimum?: number; // Минимальное значение параметра
  exclusiveMinimum?: boolean; // Указывает, включает ли минимальное значение параметра
  maxLength?: number; // Максимальная длина параметра
  minLength?: number; // Минимальная длина параметра
  pattern?: string; // Регулярное выражение, которому должно соответствовать значение параметра
  maxItems?: number; // Максимальное количество элементов в массиве параметра
  minItems?: number; // Минимальное количество элементов в массиве параметра
  uniqueItems?: boolean; // Указывает, должны ли элементы массива быть уникальными
  maxProperties?: number; // Максимальное количество свойств объекта параметра
  minProperties?: number; // Минимальное количество свойств объекта параметра
  required?: string[]; // Список обязательных свойств объекта параметра
  enum?: any[]; // Список возможных значений для параметра
  type?: string; // Тип параметра (например, "string" или "array")
  allOf?: ReferenceObject[] | SchemaObject30[]; // Массив ссылок на другие схемы, которые должны быть объединены с этой схемой
  oneOf?: ReferenceObject[] | SchemaObject30[]; // Массив ссылок на другие схемы, из которых должно быть выбрано одно
  anyOf?: ReferenceObject[] | SchemaObject30[]; // Массив ссылок на другие схемы, из которых может быть выбрано любое количество
  not?: ReferenceObject | SchemaObject30; // Ссылка на схему, которая не должна использоваться вместе с этой схемой
  items?: ReferenceObject | SchemaObject30; // Ссылка на схему, которая определяет тип элементов массива параметра
  properties?: { [propertyName: string]: ReferenceObject | SchemaObject30 }; // Описание свойств объекта параметра
  additionalProperties?: boolean | ReferenceObject | SchemaObject30; // Описание свойств объекта параметра, не указанных в свойстве properties
  description?: string; // Описание параметра
  format?: string; // Формат параметра (например, "date-time" для даты и времени)
  default?: any; // Значение по умолчанию для параметра
  nullable?: boolean; // Указывает, может ли параметр иметь значение null
  discriminator?: DiscriminatorObject; // Описание дискриминатора для полиморфных объектов
  readOnly?: boolean; // Указывает, что параметр не может быть изменен после создания
  writeOnly?: boolean; // Указывает, что параметр может быть установлен только при создании объекта и не может быть прочитан после этого
  xml?: XMLObject; // Описание XML-представления параметра
  externalDocs?: ExternalDocumentationObject; // Ссылка на внешнюю документацию для параметра
  example?: any; // Пример значения параметра
  deprecated?: boolean; // Указывает, что параметр устарел и должен быть удален в будущих версиях
  [key: `x-${string}-${string}`]: string | undefined;
}

interface DiscriminatorObject {
  propertyName: string; // Имя свойства, которое будет использоваться как дискриминатор
  mapping?: { [value: string]: string }; // Список соответствий значений дискриминирующего свойства и имен схем, соответствующих этим значениям
}

interface XMLObject {
  name?: string; // Имя элемента XML, используемое для сериализации данного свойства
  namespace?: string; // Пространство имен XML, используемое для сериализации данного свойства
  prefix?: string; // Префикс XML, используемый для сериализации данного свойства
  attribute?: boolean; // Флаг, указывающий, должно ли значение свойства быть сериализовано как атрибут XML
  wrapped?: boolean; // Флаг, указывающий, должно ли значение свойства быть обернуто в дополнительный элемент XML
  [key: `x-${string}-${string}`]: string | undefined;
}

interface ComponentsObject30 {
  schemas?: { [key: string]: SchemaObject30 | ReferenceObject }; // Описание схем данных
  responses?: { [key: string]: ResponseObject | ReferenceObject }; // Описание ответов API
  parameters?: { [key: string]: ParameterObject | ReferenceObject }; // Описание параметров API
  examples?: { [key: string]: ExampleObject | ReferenceObject }; // Описание примеров данных
  requestBodies?: { [key: string]: RequestBodyObject | ReferenceObject }; // Описание тел запросов API
  headers?: { [key: string]: HeaderObject | ReferenceObject }; // Описание заголовков HTTP запросов и ответов
  securitySchemes?: { [key: string]: SecuritySchemeObject | ReferenceObject }; // Описание схем безопасности
  links?: { [key: string]: LinkObject | ReferenceObject }; // Описание ссылок между ресурсами
  callbacks?: { [key: string]: CallbackObject | ReferenceObject }; // Описание обратных вызовов для API
}

interface OpenAPIObject30 {
  openapi: string;
  info: InfoObject30; // Описание информации об API
  paths: PathsObject30; // Описание маршрутов и методов API
  components?: ComponentsObject30; // Компоненты API
  security?: SecurityRequirementObject[]; // Требования к безопасности для API
  tags?: TagObject[]; // Теги, используемые для организации маршрутов по группам
  externalDocs?: ExternalDocumentationObject; // Внешняя документация, связанная с API
}


interface InfoObject21 {
  title: string; // Название API
  version: string; // Версия API
  description?: string; // Описание API
  termsOfService?: string; // Условия использования API
  contact?: ContactObject; // Контактная информация для API
  license?: LicenseObject; // Лицензия для API
  [key: `x-${string}-${string}`]: string | undefined;
}

interface PathsObject21 {
  [path: string]: PathItemObject21 | ReferenceObject | undefined; // Описание маршрута
}

interface PathItemObject21 {
  get?: OperationObject; // Операция HTTP GET для данного пути
  put?: OperationObject; // Операция HTTP PUT для данного пути
  post?: OperationObject; // Операция HTTP POST для данного пути
  delete?: OperationObject; // Операция HTTP DELETE для данного пути
  options?: OperationObject; // Операция HTTP OPTIONS для данного пути
  head?: OperationObject; // Операция HTTP HEAD для данного пути
  patch?: OperationObject; // Операция HTTP PATCH для данного пути
  parameters?: (ParameterObject | ReferenceObject)[]; // Список параметров, применимых ко всем операциям этого пути
}

interface OperationObject {
  tags?: string[]; // Список тегов, связанных с этой операцией
  summary?: string; // Краткое описание операции
  description?: string; // Подробное описание операции
  externalDocs?: ExternalDocumentationObject; // Дополнительная документация для этой операции
  operationId?: string; // Уникальный идентификатор операции
  consumes?: string[]; // Список MIME-типов, которые поддерживаются этой операцией при получении данных от клиента
  produces?: string[]; // Список MIME-типов, которые поддерживаются этой операцией при отправке данных клиенту
  parameters?: (ParameterObject | ReferenceObject)[]; // Список параметров, применимых только к этой операции
  responses: ResponsesObject; // Ответы, которые может возвращать эта операция
  schemes?: string[]; // Список схем (http, https, ws, wss) для этой операции
  deprecated?: boolean; // Указывает, что эта операция устарела и не должна использоваться
  security?: SecurityRequirementObject[]; // Описывает необходимые права доступа для этой операции
  [key: `x-${string}-${string}`]: string | undefined;
}

interface ResponsesObject {
  default?: ResponseObject | ReferenceObject; // Описание ответа по умолчанию для всех статусных кодов, не указанных явно в этом объекте
  [status: string]: ResponseObject | ReferenceObject; // Каждый ключ является строкой, представляющей числовой HTTP-статусный код, а значение — объект, представляющий ответ на этот статусный код
}

interface DefinitionsObject {
  [key: string]: SchemaObject | ReferenceObject; // Описание схем данных
}

interface ParametersDefinitionsObject {
  [key: string]: ParameterObject | ReferenceObject; // Описание параметров API
}

interface ResponsesDefinitionsObject {
  [key: string]: ResponseObject | ReferenceObject; // Описание ответов API
}

interface SecurityDefinitionsObject {
  [key: string]: SecuritySchemeObject; // Описание схем безопасности
}

interface SwaggerObject21 {
  swagger: string;
  info: InfoObject21; // Описание информации об API
  paths: PathsObject21; // Описание маршрутов и методов API
  definitions?: DefinitionsObject; // Описание схем данных
  parameters?: ParametersDefinitionsObject; // Описание параметров API
  responses?: ResponsesDefinitionsObject; // Описание ответов API
  securityDefinitions?: SecurityDefinitionsObject; // Описание схем безопасности
  security?: SecurityRequirementObject[]; // Требования к безопасности для API
  tags?: TagObject[]; // Теги, используемые для организации маршрутов по группам
  externalDocs?: ExternalDocumentationObject; // Внешняя документация, связанная с API
}


interface InfoObject20 {
  title: string; // Название API
  version: string; // Версия API
  description?: string; // Описание API
  termsOfService?: string; // Условия использования API
  contact?: ContactObject; // Контактная информация для API
  license?: LicenseObject; // Лицензия для API
  [key: `x-${string}-${string}`]: string | undefined;
}

interface PathsObject20 {
  [path: string]: PathItemObject20 | ReferenceObject; // Описание маршрута
}

interface PathItemObject20 {
  get?: OperationObject; // Операция HTTP GET для этого пути
  put?: OperationObject; // Операция HTTP PUT для этого пути
  post?: OperationObject; // Операция HTTP POST для этого пути
  delete?: OperationObject; // Операция HTTP DELETE для этого пути
  options?: OperationObject; // Операция HTTP OPTIONS для этого пути
  head?: OperationObject; // Операция HTTP HEAD для этого пути
  patch?: OperationObject; // Операция HTTP PATCH для этого пути
  parameters?: (ParameterObject | ReferenceObject)[]; // Список параметров, применимых ко всем операциям в этом пути
}

interface SwaggerObject20 {
  swagger: string;
  info: InfoObject20; // Описание информации об API
  paths: PathsObject20; // Описание маршрутов и методов API
  definitions?: DefinitionsObject; // Описание схем данных
  parameters?: ParametersDefinitionsObject; // Описание параметров API
  responses?: ResponsesDefinitionsObject; // Описание ответов API
  securityDefinitions?: SecurityDefinitionsObject; // Описание схем безопасности
  security?: SecurityRequirementObject[]; // Требования к безопасности для API
  tags?: TagObject[]; // Теги, используемые для организации маршрутов по группам
  externalDocs?: ExternalDocumentationObject; // Внешняя документация, связанная с API
}

interface ParameterObject {
  name: string; // Название параметра
  in: string; // Местоположение параметра
  description?: string; // Описание параметра
  required?: boolean; // Является ли параметр обязательным
  deprecated?: boolean; // Устарел ли параметр
  allowEmptyValue?: boolean; // Разрешается ли пустое значение
  style?: string; // Стиль передачи параметра
  explode?: boolean; // Разбивать ли массивы и объекты на отдельные параметры
  allowReserved?: boolean; // Разрешается ли использовать зарезервированные символы
  schema?: SchemaObject | ReferenceObject; // Схема параметра
  example?: any; // Пример значения параметра
  examples?: { [media: string]: ExampleObject | ReferenceObject }; // Примеры значения параметра
  content?: { [media: string]: MediaTypeObject }; // Описание формата передаваемых данных
  [key: `x-${string}-${string}`]: string | undefined;
}

interface ReferenceObject {
  $ref: string; // Ссылка на другой объект спецификации
  // Объекты, на которые может ссылаться ReferenceObject:
  // - SchemaObject
  // - ResponseObject
  // - ParameterObject
  // - ExampleObject
  // - RequestBodyObject
  // - HeaderObject
  // - SecuritySchemeObject
  // - LinkObject
  // - CallbackObject
}

interface RequestBodyObject {
  description?: string; // Описание тела запроса
  content: { [media: string]: MediaTypeObject }; // Описание формата передаваемых данных
  required?: boolean; // Является ли тело запроса обязательным

  [key: `x-${string}-${string}`]: string | undefined;
}

interface ResponseObject {
  description: string; // Описание ответа
  headers?: { [headerName: string]: HeaderObject | ReferenceObject }; // Описание заголовков ответа
  content?: { [media: string]: MediaTypeObject }; // Описание формата передаваемых данных
  links?: { [linkName: string]: LinkObject | ReferenceObject }; // Описание ссылок на другие ресурсы

  [key: `x-${string}-${string}`]: string | undefined;
}

interface CallbackObject {
  [expression: string]: PathItemObject | ReferenceObject; // Описание маршрутов, доступных для вызова обратного вызова
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
  nullable?: boolean; // Может ли схема содержать значение null
  discriminator?: DiscriminatorObject; // Используется для различения объектов в иерархии наследования
  readOnly?: boolean; // Может ли объект быть только для чтения
  writeOnly?: boolean; // Может ли объект быть только для записи
  xml?: XMLObject; // Описание XML-представления объекта
  externalDocs?: ExternalDocumentationObject; // Внешняя документация, связанная с объектом
  example?: any; // Пример объекта
  examples?: { [media: string]: ExampleObject | ReferenceObject }; // Примеры объекта
  deprecated?: boolean; // Является ли объект устаревшим
  type?: string; // Тип объекта
  allOf?: (SchemaObject | ReferenceObject)[]; // Описывает комбинацию нескольких схем
  oneOf?: (SchemaObject | ReferenceObject)[]; // Описывает несколько вариантов схем
  anyOf?: (SchemaObject | ReferenceObject)[]; // Описывает несколько возможных схем
  not?: SchemaObject | ReferenceObject; // Описывает схему, которая не должна соответствовать данной схеме
  items?: SchemaObject | ReferenceObject; // Описывает схему элементов массива
  properties?: { [propertyName: string]: SchemaObject | ReferenceObject }; // Описывает свойства объекта
  additionalProperties?: boolean | SchemaObject | ReferenceObject; // Разрешены ли дополнительные свойства объекта
  description?: string; // Описание объекта
  format?: string; // Формат значения объекта
  default?: any; // Значение по умолчанию
  title?: string; // Название объекта
  multipleOf?: number; // Число, на которое должно делиться значение объекта
  maximum?: number; // Максимальное значение объекта
  exclusiveMaximum?: boolean; // Указывает, является ли максимальное значение исключительным
  minimum?: number; // Минимальное значение объекта
  exclusiveMinimum?: boolean; // Указывает, является ли минимальное значение исключительным
  maxLength?: number; // Максимальная длина строки
  minLength?: number; // Минимальная длина строки
  pattern?: string; // Регулярное выражение, которому должна соответствовать строка
  maxItems?: number; // Максимальное количество элементов массива
  minItems?: number; // Минимальное количество элементов массива
  uniqueItems?: boolean; // Указывает, должны ли все элементы массива быть уникальными
  maxProperties?: number; // Максимальное количество свойств объекта
  minProperties?: number; // Минимальное количество свойств объекта
  required?: string[]; // Список обязательных свойств объекта
  enum?: any[]; // Список допустимых значений объекта
  [key: `x-${string}-${string}`]: string | undefined;
}

interface ExampleObject {
  summary?: string; // Краткое описание примера
  description?: string; // Описание примера
  value?: any; // Значение примера
  externalValue?: string; // Внешний источник, содержащий значение примера
  [key: `x-${string}-${string}`]: string | undefined;
}

interface HeaderObject {
  description?: string; // Описание заголовка
  required?: boolean; // Является ли заголовок обязательным
  deprecated?: boolean; // Является ли заголовок устаревшим
  allowEmptyValue?: boolean; // Разрешен ли пустой заголовок
  style?: string; // Стиль заголовка
  explode?: boolean; // Разделить ли заголовок на несколько параметров
  allowReserved?: boolean; // Разрешено ли использовать специальные символы в заголовке
  schema?: SchemaObject | ReferenceObject; // Описание схемы заголовка
  example?: any; // Пример значения заголовка
  examples?: { [media: string]: ExampleObject | ReferenceObject }; // Примеры значения заголовка
  [key: `x-${string}-${string}`]: string | undefined;
}

interface SecuritySchemeObject {
  type: string; // Тип схемы безопасности
  description?: string; // Описание схемы безопасности
  name?: string; // Имя параметра, содержащего имя пользователя или ключ API
  in?: string; // Место, где находится параметр, содержащий имя пользователя или ключ API
  scheme?: string; // Схема аутентификации (например, Basic, Bearer)
  bearerFormat?: string; // Формат токена авторизации типа Bearer
  flows?: OAuthFlowsObject; // Описание потоков OAuth для схемы авторизации типа OAuth2
  openIdConnectUrl?: string; // URL-адрес конечной точки OpenID Connect, который возвращает конфигурационные данные
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
  scopes: { [scopeName: string]: string };
}

interface LinkObject {
  operationRef?: string; // Ссылка на операцию, которая должна быть вызвана
  operationId?: string; // Идентификатор операции Swagger, которая должна быть вызвана
  parameters?: { [parameterName: string]: any }; // Параметры запроса, которые должны быть переданы в вызываемую операцию
  requestBody?: any; // Тело запроса, которое должно быть передано в вызываемую операцию
  description?: string; // Описание ссылки
  server?: ServerObject; // Объект сервера, на который должна быть отправлена ссылка
}

interface ContactObject {
  name?: string; // Имя контактного лица
  url?: string; // URL-адрес, по которому можно связаться с контактным лицом
  email?: string; // Адрес электронной почты контактного лица
  [key: `x-${string}-${string}`]: string | undefined;
}

interface LicenseObject {
  name: string; // Название лицензии
  url?: string; // URL-адрес, по которому можно получить информацию о лицензии
  [key: `x-${string}-${string}`]: string | undefined;
}
