<template>
  <div class="oapi-server">
    <div
      v-if="server.url"
      class="oapi-server__url"
    >
      <code>{{ server.url }}</code>
    </div>
    <div
      v-if="server.description"
      class="oapi-server__description"
      v-html="$openapidocRef.tr(server, 'description', currentLocale)"
    />
    <div
      v-if="server.variables && Object.keys(server.variables).length"
      class="oapi-server-vars"
    >
      <div class="oapi-server-vars__title">
        {{ $openapidoc.getLocaleText('openapidoc.variables') }}
      </div>
      <ul>
        <li
          v-for="(varObj, varName) in server.variables"
          class="oapi-server-var"
        >
          <div class="oapi-server-var__name">
            <code>{{ varName }}</code>
          </div>
          <div
            v-if="varObj.description"
            class="oapi-server-var__description"
            v-html="$openapidocRef.tr(varObj, 'description', currentLocale)"
          />
          <div
            v-if="varObj.default"
            class="oapi-server-var__default"
          >
            {{ $openapidoc.getLocaleText('openapidoc.default') }}: <code>{{ varObj.default }}</code>
          </div>
          <div
            v-if="varObj.enum"
            class="oapi-server-var__enum"
          >
            {{ $openapidoc.getLocaleText('openapidoc.enum') }}:
            <span
              v-for="(enumVal) in varObj.enum"
              :key="enumVal"
            >
              <code>{{ enumVal }}</code>{{ ' ' }}
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OpenApiServer',
  props: {
    server: {
      type: Object,
      required: true,
    },
    currentLocale: {
      type: String,
      required: true,
    },
  },
  data () {
    return {}
  }
}
</script>

<style>
.oapi-server {
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 6px;
  border: 1px solid #E2E2E2;
}
.oapi-server__url {
  margin-bottom: 16px;
}
.oapi-server__url code {
  font-size: 1rem;
}
.oapi-server__description {
  margin-bottom: 8px;
}

.oapi-server-vars__title {
  color: #666;
  font-weight: 600;
  margin-bottom: 8px;
}
.oapi-server-vars ul {
  margin: 0;
  padding: 0 0 0 16px;
}

.oapi-server-var {
  margin-bottom: 16px;
}
.oapi-server-var:last-child {
  margin-bottom: 0;
}
</style>
