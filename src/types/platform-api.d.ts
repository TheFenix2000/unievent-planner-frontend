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
  TESTS = '#F1656A', // EXAM, RETAKES, QUIZ
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

export interface UserAccountDto extends AccountBasicDto {
  firstName?: string;
  lastName?: string;
  email: string;
  roles: RoleDto[];
  groups: GroupDto[];
  status: SystemStatus;
}

export interface AnnouncementDto extends BaseDto {
  title: string;
  description: string;
  expiresAt?: Date;
  important: boolean;
}

export interface EventDto extends BaseDto {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  groups: string[];
  type: EventType;
}

export interface EventTypeDto {
  color: EventTypeColor;
  type: EventType;
}

export interface CreateGroupDto {
  name: string;
  courseName?: string;
  description?: string;
  avatarUrl: string;
}

export interface GroupDto extends BaseDto {
  name: string;
  courseName?: string;
  description?: string;
  avatarUrl: string;
  code: string;
  status: SystemStatus;
  verificationStatus: VerificationStatus;
  rejectionReason?: string;
  president: AccountBasicDto;
  members: AccountBasicDto[];
  joinCodes: JoinCodeDto[];
}

export interface JoinCodeDto extends BaseDto {
  name: string;
  code: string;
  role: RoleDto;
  group: GroupDto;
  status: SystemStatus;
  uses: number;
  usesLeft?: number;
  expiresAt: Date;
}

export interface PermissionRule {
  action: Action;
  subject: Subject;
}

export interface RoleDto extends BaseDto {
  name: string;
  code: string;
  permissions: PermissionRule[];
  status: SystemStatus;
}

export interface CreateSystemLogDto {
  action: SystemLogAction;
  message: string;
  context: SystemLogContext;
  relatedObjectId: string;
}

export interface SystemLogDto extends BaseDto {
  action: SystemLogAction;
  message: string;
  context: SystemLogContext;
  relatedObjectId: string;
  status: SystemStatus;
}
