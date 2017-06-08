// @flow

type YamlObject = { [key: string]: string|YamlObject };

// eslint-disable-next-line
declare module YAMLModule {
    declare var exports: { [key: string]: string|YamlObject };
}
