import React from 'react';

export interface NavItem {
  id: string;
  label: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: React.ReactNode;
}

export interface Artwork {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}