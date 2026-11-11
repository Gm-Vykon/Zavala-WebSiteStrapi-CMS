import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsConfiguration extends Struct.ComponentSchema {
  collectionName: 'components_sections_configurations';
  info: {
    displayName: 'Configuration';
  };
  attributes: {
    attributes: Schema.Attribute.Component<'shared.attribute', true>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFeature extends Struct.ComponentSchema {
  collectionName: 'components_sections_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedAttribute extends Struct.ComponentSchema {
  collectionName: 'components_shared_attributes';
  info: {
    description: 'Flexible label/value data for service cards and detail pages';
    displayName: 'Attribute';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    showOnCard: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<['primary', 'secondary']> &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'sections.configuration': SectionsConfiguration;
      'sections.feature': SectionsFeature;
      'shared.attribute': SharedAttribute;
      'shared.button': SharedButton;
    }
  }
}
