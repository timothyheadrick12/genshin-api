/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { core, connectionPluginCore } from "nexus"

declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * Adds a Relay-style connection to the type, with numerous options for configuration
     *
     * @see https://nexusjs.org/docs/plugins/connection
     */
    connectionField<FieldName extends string>(
      fieldName: FieldName,
      config: connectionPluginCore.ConnectionFieldConfig<TypeName, FieldName>
    ): void
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  SortEnum: {"affiliation":"asc"} | {"affiliation":"desc"} | {"birthday":"asc"} | {"birthday":"desc"} | {"constellation":"asc"} | {"constellation":"desc"} | {"gender":"asc"} | {"gender":"desc"} | {"id":"asc"} | {"id":"desc"}
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Character: { // root type
    affiliation: string; // String!
    birthday?: string | null; // String
    constellation: string; // String!
    constellations?: Array<NexusGenRootTypes['CharacterConstellation'] | null> | null; // [CharacterConstellation]
    description: string; // String!
    gender?: string | null; // String
    id: string; // ID!
    name: string; // String!
    nation: string; // String!
    rarity: number; // Int!
    specialDish?: string | null; // String
    title?: string | null; // String
    vision: string; // String!
    vision_key: string; // String!
    weapon: string; // String!
    weapon_type: string; // String!
  }
  CharacterConnection: { // root type
    edges?: Array<NexusGenRootTypes['CharacterEdge'] | null> | null; // [CharacterEdge]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  CharacterConstellation: { // root type
    description?: string | null; // String
    level?: number | null; // Int
    name?: string | null; // String
    unlock?: string | null; // String
  }
  CharacterEdge: { // root type
    cursor: string; // String!
    node?: NexusGenRootTypes['Character'] | null; // Character
  }
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor?: string | null; // String
  }
  Query: {};
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Character: { // field return type
    affiliation: string; // String!
    birthday: string | null; // String
    constellation: string; // String!
    constellations: Array<NexusGenRootTypes['CharacterConstellation'] | null> | null; // [CharacterConstellation]
    description: string; // String!
    gender: string | null; // String
    id: string; // ID!
    name: string; // String!
    nation: string; // String!
    rarity: number; // Int!
    specialDish: string | null; // String
    title: string | null; // String
    vision: string; // String!
    vision_key: string; // String!
    weapon: string; // String!
    weapon_type: string; // String!
  }
  CharacterConnection: { // field return type
    edges: Array<NexusGenRootTypes['CharacterEdge'] | null> | null; // [CharacterEdge]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  CharacterConstellation: { // field return type
    description: string | null; // String
    level: number | null; // Int
    name: string | null; // String
    unlock: string | null; // String
  }
  CharacterEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Character'] | null; // Character
  }
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor: string | null; // String
  }
  Query: { // field return type
    character: NexusGenRootTypes['Character'] | null; // Character
    characters: NexusGenRootTypes['CharacterConnection'] | null; // CharacterConnection
  }
}

export interface NexusGenFieldTypeNames {
  Character: { // field return type name
    affiliation: 'String'
    birthday: 'String'
    constellation: 'String'
    constellations: 'CharacterConstellation'
    description: 'String'
    gender: 'String'
    id: 'ID'
    name: 'String'
    nation: 'String'
    rarity: 'Int'
    specialDish: 'String'
    title: 'String'
    vision: 'String'
    vision_key: 'String'
    weapon: 'String'
    weapon_type: 'String'
  }
  CharacterConnection: { // field return type name
    edges: 'CharacterEdge'
    pageInfo: 'PageInfo'
  }
  CharacterConstellation: { // field return type name
    description: 'String'
    level: 'Int'
    name: 'String'
    unlock: 'String'
  }
  CharacterEdge: { // field return type name
    cursor: 'String'
    node: 'Character'
  }
  PageInfo: { // field return type name
    endCursor: 'String'
    hasNextPage: 'Boolean'
    hasPreviousPage: 'Boolean'
    startCursor: 'String'
  }
  Query: { // field return type name
    character: 'Character'
    characters: 'CharacterConnection'
  }
}

export interface NexusGenArgTypes {
  Query: {
    character: { // args
      sort?: NexusGenEnums['SortEnum'] | null; // SortEnum
    }
    characters: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      sort?: NexusGenEnums['SortEnum'] | null; // SortEnum
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}