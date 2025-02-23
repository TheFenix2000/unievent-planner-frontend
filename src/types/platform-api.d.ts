// Enums
export enum Action {
  DELETE = 'Delete',
  DISPLAY = 'Display',
  MANAGE = 'Manage',
  UPDATE = 'Update',
}

export enum AnnouncementTargetType {
  GLOBAL = 'Global',
  GROUPS = 'Groups',
  ROLES = 'Roles',
  USERS = 'Users',
}

export enum EventTypeColor {
  CLASSES = '#BBE2FF',
  CLASS_CANCELLATION = '#FFF069',
  TESTS = '#F1656A',
  MEETING = '#B8FFA8',
  OTHER = '#D9D9D9',
}

export enum EventType {
  CLASSES = 'Zajęcia',
  CLASS_CANCELLATION = 'Odwołanie zajęć',
  EXAM = 'Egzamin',
  MEETING = 'Spotkanie',
  OTHER = 'Inne',
  QUIZ = 'Kolokwium',
  RETAKE = 'Poprawka',
}

export enum Subject {
  ACCOUNTS = 'Accounts',
  ALL = 'All',
  ANNOUNCEMENTS = 'Announcements',
  EVENTS = 'Events',
  GROUPS = 'Groups',
  JOIN_CODES = 'JoinCodes',
  ROLES = 'Roles',
}

export enum SystemLogAction {
  CREATE = 'Create',
  DELETE = 'Delete',
  UPDATE = 'Update',
}

export enum SystemLogContext {
  EVENT = 'Event',
  ANNOUNCEMENT = 'Announcement',
  GROUP = 'Group',
  JOINCODES = 'Join Codes',
  ROLES = 'Roles',
  ACCOUNT = 'Account',
  SYSTEM = 'System',
}

export enum SystemStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export enum VerificationStatus {
  PENDING = 'PENDING',
  REJECTED = 'REJECTED',
  VERIFIED = 'VERIFIED',
}

// Interfaces
export interface BasicDto {
  id: string;
}

export interface BaseDto extends BasicDto {
  createdAt?: Date;
  updatedAt: Date;
  createdBy?: AccountBasicDto;
  updatedBy: AccountBasicDto;
}

export interface AccountBasicDto extends BasicDto {
  username: string;
  avatarUrl?: string;
  fullName: string;
  initials: string;
}
