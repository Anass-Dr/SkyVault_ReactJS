export interface FileType {
  id?: string;
  name: string;
  type: string;
  url?: string;
  size: number;
  lastModified?: string;
  isShared: boolean;
  sharedBy?: string;
}

export interface User {
  username: string;
  email: string;
}
