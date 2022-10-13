import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  ExpectedErrorType: any;
  GenericScalar: any;
};

export type AbsenceType = {
  __typename?: 'AbsenceType';
  day: Scalars['Int'];
  hours: Scalars['Int'];
  idAbsence: Scalars['ID'];
  idCourse: Scalars['Int'];
  idStudent: Scalars['Int'];
  justification: Scalars['String'];
  month: Scalars['Int'];
  period: Scalars['Int'];
  year: Scalars['Int'];
};

export type AchievementType = {
  __typename?: 'AchievementType';
  description: Scalars['String'];
  idAchievement: Scalars['ID'];
  idCourse: Scalars['Int'];
  period: Scalars['Int'];
};

export type Achievement_StudentType = {
  __typename?: 'Achievement_StudentType';
  idAchieStu: Scalars['ID'];
  idAchievement: Scalars['Int'];
  idStudent: Scalars['Int'];
  score: Scalars['String'];
};

export type AreaType = {
  __typename?: 'AreaType';
  idArea: Scalars['ID'];
  name: Scalars['String'];
  status: Scalars['String'];
};

export type CourseType = {
  __typename?: 'CourseType';
  average: Scalars['String'];
  hour: Scalars['Int'];
  idArea: Scalars['Int'];
  idCourse: Scalars['ID'];
  idGroup: Scalars['Int'];
  idTeacher: Scalars['Int'];
  name: Scalars['String'];
  percentage: Scalars['Int'];
  position: Scalars['Int'];
};

export type Course_StudentType = {
  __typename?: 'Course_StudentType';
  idCourStu: Scalars['ID'];
  idCourse: Scalars['Int'];
  idStudent: Scalars['Int'];
  score1?: Maybe<Scalars['String']>;
  score2?: Maybe<Scalars['String']>;
  score3?: Maybe<Scalars['String']>;
  score4?: Maybe<Scalars['String']>;
  score5?: Maybe<Scalars['String']>;
};

export type CreateAbsence = {
  __typename?: 'CreateAbsence';
  absence?: Maybe<AbsenceType>;
};

export type CreateAchievement = {
  __typename?: 'CreateAchievement';
  achievement?: Maybe<AchievementType>;
};

export type CreateAchievement_Student = {
  __typename?: 'CreateAchievement_Student';
  achievementStudent?: Maybe<Achievement_StudentType>;
};

export type CreateArea = {
  __typename?: 'CreateArea';
  area?: Maybe<AreaType>;
};

export type CreateCourse = {
  __typename?: 'CreateCourse';
  course?: Maybe<CourseType>;
};

export type CreateCourse_Student = {
  __typename?: 'CreateCourse_Student';
  courseStudent?: Maybe<Course_StudentType>;
};

export type CreateEnrollment = {
  __typename?: 'CreateEnrollment';
  enrollment?: Maybe<EnrollmentType>;
};

export type CreateFeatured = {
  __typename?: 'CreateFeatured';
  featured?: Maybe<FeaturedType>;
};

export type CreateGroup = {
  __typename?: 'CreateGroup';
  group?: Maybe<GroupType>;
};

export type CreateIndicator_Student = {
  __typename?: 'CreateIndicator_Student';
  indicatorStudent?: Maybe<Indicator_StudentType>;
};

export type CreateObservation = {
  __typename?: 'CreateObservation';
  observation?: Maybe<ObservationType>;
};

export type CreateRecommendation = {
  __typename?: 'CreateRecommendation';
  recommendation?: Maybe<RecommendationType>;
};

export type CreateRecommendation_Student = {
  __typename?: 'CreateRecommendation_Student';
  recommendationStudent?: Maybe<Recommendation_StudentType>;
};

export type CreateScholar_Year = {
  __typename?: 'CreateScholar_Year';
  scholarYear?: Maybe<Scholar_YearType>;
};

export type CreateStudent = {
  __typename?: 'CreateStudent';
  student?: Maybe<StudentType>;
};

export type CreateTeacher = {
  __typename?: 'CreateTeacher';
  teacher?: Maybe<TeacherType>;
};

export type CreateType_Qualification = {
  __typename?: 'CreateType_Qualification';
  typeQualification?: Maybe<Type_QualificationType>;
};

export type CreateUser = {
  __typename?: 'CreateUser';
  user?: Maybe<UserType>;
};

export type DeleteAbsence = {
  __typename?: 'DeleteAbsence';
  absence?: Maybe<AbsenceType>;
};

export type DeleteAchievement = {
  __typename?: 'DeleteAchievement';
  achievement?: Maybe<AchievementType>;
};

export type DeleteAchievement_Student = {
  __typename?: 'DeleteAchievement_Student';
  achievementStudent?: Maybe<Achievement_StudentType>;
};

export type DeleteArea = {
  __typename?: 'DeleteArea';
  area?: Maybe<AreaType>;
};

export type DeleteCourse = {
  __typename?: 'DeleteCourse';
  course?: Maybe<CourseType>;
};

export type DeleteCourse_Student = {
  __typename?: 'DeleteCourse_Student';
  courseStudent?: Maybe<Course_StudentType>;
};

export type DeleteEnrollment = {
  __typename?: 'DeleteEnrollment';
  enrollment?: Maybe<EnrollmentType>;
};

export type DeleteFeatured = {
  __typename?: 'DeleteFeatured';
  featured?: Maybe<FeaturedType>;
};

export type DeleteGroup = {
  __typename?: 'DeleteGroup';
  group?: Maybe<GroupType>;
};

export type DeleteIndicator_Student = {
  __typename?: 'DeleteIndicator_Student';
  indicatorStudent?: Maybe<Indicator_StudentType>;
};

export type DeleteObservation = {
  __typename?: 'DeleteObservation';
  observation?: Maybe<ObservationType>;
};

export type DeleteRecommendation = {
  __typename?: 'DeleteRecommendation';
  recommendation?: Maybe<RecommendationType>;
};

export type DeleteRecommendation_Student = {
  __typename?: 'DeleteRecommendation_Student';
  recommendationStudent?: Maybe<Recommendation_StudentType>;
};

export type DeleteScholar_Year = {
  __typename?: 'DeleteScholar_Year';
  scholarYear?: Maybe<Scholar_YearType>;
};

export type DeleteStudent = {
  __typename?: 'DeleteStudent';
  student?: Maybe<StudentType>;
};

export type DeleteTeacher = {
  __typename?: 'DeleteTeacher';
  teacher?: Maybe<TeacherType>;
};

export type DeleteType_Qualification = {
  __typename?: 'DeleteType_Qualification';
  typeQualification?: Maybe<Type_QualificationType>;
};

export type DeleteUser = {
  __typename?: 'DeleteUser';
  user?: Maybe<UserType>;
};

export type EnrollmentType = {
  __typename?: 'EnrollmentType';
  dateDesertion?: Maybe<Scalars['Date']>;
  idEnrollment: Scalars['ID'];
  idGroup: Scalars['Int'];
  idStudent: Scalars['Int'];
  reasonDesertion?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  year: Scalars['Int'];
};

export type FeaturedType = {
  __typename?: 'FeaturedType';
  idFeatured: Scalars['ID'];
  idGroup: Scalars['Int'];
  idStudent: Scalars['Int'];
};

export type GroupType = {
  __typename?: 'GroupType';
  idGroup: Scalars['ID'];
  idYear: Scalars['Int'];
  level: Scalars['Int'];
  representative: Scalars['String'];
  sublevel: Scalars['String'];
  workingTime: Scalars['String'];
};

export type Indicator_StudentType = {
  __typename?: 'Indicator_StudentType';
  idIndStu: Scalars['ID'];
  idIndicator: Scalars['Int'];
  idStudent: Scalars['Int'];
  score: Scalars['String'];
};

export type InstitutionType = {
  __typename?: 'InstitutionType';
  direction: Scalars['String'];
  idInstitution: Scalars['ID'];
  information: Scalars['String'];
  logo?: Maybe<Scalars['String']>;
  message: Scalars['String'];
  monthlyPay: Scalars['Int'];
  name: Scalars['String'];
  payInscription: Scalars['Int'];
  phone: Scalars['String'];
  register: Scalars['String'];
  responsable: Scalars['String'];
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  DeleteIndicatorStudent?: Maybe<DeleteIndicator_Student>;
  createAbsence?: Maybe<CreateAbsence>;
  createAchievement?: Maybe<CreateAchievement>;
  createAchievementStudent?: Maybe<CreateAchievement_Student>;
  createArea?: Maybe<CreateArea>;
  createCourse?: Maybe<CreateCourse>;
  createCourseStudent?: Maybe<CreateCourse_Student>;
  createEnrollment?: Maybe<CreateEnrollment>;
  createFeatured?: Maybe<CreateFeatured>;
  createGroup?: Maybe<CreateGroup>;
  createIndicatorStudent?: Maybe<CreateIndicator_Student>;
  createObservation?: Maybe<CreateObservation>;
  createRecommendation?: Maybe<CreateRecommendation>;
  createRecommendationStudent?: Maybe<CreateRecommendation_Student>;
  createScholarYear?: Maybe<CreateScholar_Year>;
  createStudent?: Maybe<CreateStudent>;
  createTeacher?: Maybe<CreateTeacher>;
  createTypeQualification?: Maybe<CreateType_Qualification>;
  createUser?: Maybe<CreateUser>;
  deleteAbsence?: Maybe<DeleteAbsence>;
  deleteAchievement?: Maybe<DeleteAchievement>;
  deleteAchievementStudent?: Maybe<DeleteAchievement_Student>;
  deleteArea?: Maybe<DeleteArea>;
  deleteCourse?: Maybe<DeleteCourse>;
  deleteCourseStudent?: Maybe<DeleteCourse_Student>;
  deleteEnrollment?: Maybe<DeleteEnrollment>;
  deleteFeatured?: Maybe<DeleteFeatured>;
  deleteGroup?: Maybe<DeleteGroup>;
  deleteObservation?: Maybe<DeleteObservation>;
  deleteRecommendation?: Maybe<DeleteRecommendation>;
  deleteRecommendationStudent?: Maybe<DeleteRecommendation_Student>;
  deleteScholarYear?: Maybe<DeleteScholar_Year>;
  deleteStudent?: Maybe<DeleteStudent>;
  deleteTeacher?: Maybe<DeleteTeacher>;
  deleteTypeQualification?: Maybe<DeleteType_Qualification>;
  deleteUser?: Maybe<DeleteUser>;
  /**
   * Change account password when user knows the old password.
   *
   * A new token and refresh token are sent. User must be verified.
   */
  passwordChange?: Maybe<PasswordChange>;
  /**
   * Change user password without old password.
   *
   * Receive the token that was sent by email.
   *
   * If token and new passwords are valid, update
   * user password and in case of using refresh
   * tokens, revoke all of them.
   *
   * Also, if user has not been verified yet, verify it.
   */
  passwordReset?: Maybe<PasswordReset>;
  /**
   * Register user with fields defined in the settings.
   *
   * If the email field of the user model is part of the
   * registration fields (default), check if there is
   * no user with that email or as a secondary email.
   *
   * If it exists, it does not register the user,
   * even if the email field is not defined as unique
   * (default of the default django user model).
   *
   * When creating the user, it also creates a `UserStatus`
   * related to that user, making it possible to track
   * if the user is archived, verified and has a secondary
   * email.
   *
   * Send account verification email.
   *
   * If allowed to not verified users login, return token.
   */
  register?: Maybe<Register>;
  /**
   * Sends activation email.
   *
   * It is called resend because theoretically
   * the first activation email was sent when
   * the user registered.
   *
   * If there is no user with the requested email,
   * a successful response is returned.
   */
  resendActivationEmail?: Maybe<ResendActivationEmail>;
  /**
   * Send password reset email.
   *
   * For non verified users, send an activation
   * email instead.
   *
   * Accepts both primary and secondary email.
   *
   * If there is no user with the requested email,
   * a successful response is returned.
   */
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmail>;
  /**
   * Obtain JSON web token for given user.
   *
   * Allow to perform login with different fields,
   * and secondary email if set. The fields are
   * defined on settings.
   *
   * Not verified users can login by default. This
   * can be changes on settings.
   *
   * If user is archived, make it unarchive and
   * return `unarchiving=True` on output.
   */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  updateAbsence?: Maybe<UpdateAbsence>;
  /**
   * Update user model fields, defined on settings.
   *
   * User must be verified.
   */
  updateAccount?: Maybe<UpdateAccount>;
  updateAchievement?: Maybe<UpdateAchievement>;
  updateAchievementStudent?: Maybe<UpdateAchievement_Student>;
  updateArea?: Maybe<UpdateArea>;
  updateCourse?: Maybe<UpdateCourse>;
  updateCourseStudent?: Maybe<UpdateCourse_Student>;
  updateEnrollment?: Maybe<UpdateEnrollment>;
  updateFeatured?: Maybe<UpdateFeatured>;
  updateGroup?: Maybe<UpdateGroup>;
  updateIndicatorStudent?: Maybe<UpdateIndicator_Stundent>;
  updateInstitution?: Maybe<UpdateInstitution>;
  updateObservation?: Maybe<UpdateObservation>;
  updateRecommendation?: Maybe<UpdateRecommendation>;
  updateRecommendationStudent?: Maybe<UpdateRecommendation_Student>;
  updateScholarYear?: Maybe<UpdateScholar_Year>;
  updateStudent?: Maybe<UpdateStudent>;
  updateTeacher?: Maybe<UpdateTeacher>;
  updateTypeQualification?: Maybe<UpdateType_Qualification>;
  updateUser?: Maybe<UpdateUser>;
  /**
   * Verify user account.
   *
   * Receive the token that was sent by email.
   * If the token is valid, make the user verified
   * by making the `user.status.verified` field true.
   */
  verifyAccount?: Maybe<VerifyAccount>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  verifyToken?: Maybe<VerifyToken>;
};


export type MutationDeleteIndicatorStudentArgs = {
  idIndStu: Scalars['Int'];
  idInstitution: Scalars['Int'];
};


export type MutationCreateAbsenceArgs = {
  day: Scalars['Int'];
  hours: Scalars['Int'];
  idCourse: Scalars['Int'];
  idInstitution: Scalars['Int'];
  idStudent: Scalars['Int'];
  justification: Scalars['String'];
  month: Scalars['Int'];
  period: Scalars['Int'];
  year: Scalars['Int'];
};


export type MutationCreateAchievementArgs = {
  description: Scalars['String'];
  idCourse: Scalars['Int'];
  idInstitution: Scalars['Int'];
  period: Scalars['Int'];
};


export type MutationCreateAchievementStudentArgs = {
  idAchievement: Scalars['Int'];
  idInstitution: Scalars['Int'];
  idStudent: Scalars['Int'];
  score: Scalars['String'];
};


export type MutationCreateAreaArgs = {
  idInstitution: Scalars['Int'];
  name: Scalars['String'];
  status: Scalars['String'];
};


export type MutationCreateCourseArgs = {
  average: Scalars['String'];
  hour: Scalars['Int'];
  idArea: Scalars['Int'];
  idGroup: Scalars['Int'];
  idInstitution: Scalars['Int'];
  idTeacher: Scalars['Int'];
  name: Scalars['String'];
  percentage: Scalars['Int'];
  position: Scalars['Int'];
};


export type MutationCreateCourseStudentArgs = {
  idCourse: Scalars['Int'];
  idInstitution: Scalars['Int'];
  idStudent: Scalars['Int'];
  score1?: InputMaybe<Scalars['String']>;
  score2?: InputMaybe<Scalars['String']>;
  score3?: InputMaybe<Scalars['String']>;
  score4?: InputMaybe<Scalars['String']>;
  score5?: InputMaybe<Scalars['String']>;
};


export type MutationCreateEnrollmentArgs = {
  dateDesertion?: InputMaybe<Scalars['Date']>;
  idGroup: Scalars['Int'];
  idInstitution: Scalars['Int'];
  idStudent: Scalars['Int'];
  reasonDesertion?: InputMaybe<Scalars['String']>;
  status: Scalars['String'];
  year: Scalars['Int'];
};


export type MutationCreateFeaturedArgs = {
  idGroup: Scalars['Int'];
  idInstitution: Scalars['Int'];
  idStudent: Scalars['Int'];
};


export type MutationCreateGroupArgs = {
  idInstitution: Scalars['Int'];
  idYear: Scalars['Int'];
  level: Scalars['Int'];
  representative: Scalars['String'];
  sublevel: Scalars['String'];
  workingTime: Scalars['String'];
};


export type MutationCreateIndicatorStudentArgs = {
  idIndicator: Scalars['Int'];
  idInstitution: Scalars['Int'];
  idStudent: Scalars['Int'];
  score: Scalars['String'];
};


export type MutationCreateObservationArgs = {
  description: Scalars['String'];
  idGroup: Scalars['Int'];
  idInstitution: Scalars['Int'];
  idStudent: Scalars['Int'];
  note: Scalars['String'];
  period: Scalars['Int'];
  title: Scalars['String'];
};


export type MutationCreateRecommendationArgs = {
  description: Scalars['String'];
  idCourse: Scalars['Int'];
  idInstitution: Scalars['Int'];
  period: Scalars['Int'];
};


export type MutationCreateRecommendationStudentArgs = {
  idInstitution: Scalars['Int'];
  idRecommendation?: InputMaybe<Scalars['Int']>;
  idStudent?: InputMaybe<Scalars['Int']>;
};


export type MutationCreateScholarYearArgs = {
  comment?: InputMaybe<Scalars['String']>;
  idInstitution: Scalars['Int'];
  idYear: Scalars['Int'];
  rector: Scalars['String'];
  secretary: Scalars['String'];
};


export type MutationCreateStudentArgs = {
  birthday: Scalars['Date'];
  direction: Scalars['String'];
  father: Scalars['String'];
  guardian: Scalars['String'];
  idInstitution: Scalars['Int'];
  identification: Scalars['String'];
  lastName: Scalars['String'];
  mother: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  sex: Scalars['String'];
  status: Scalars['String'];
  typeId: Scalars['Int'];
};


export type MutationCreateTeacherArgs = {
  degree: Scalars['String'];
  direction: Scalars['String'];
  email: Scalars['String'];
  idInstitution: Scalars['Int'];
  identification: Scalars['String'];
  lastName: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  typeId: Scalars['Int'];
};


export type MutationCreateTypeQualificationArgs = {
  ceilingScore: Scalars['Float'];
  floorScore: Scalars['Float'];
  idInstitution: Scalars['Int'];
  name: Scalars['String'];
  year?: InputMaybe<Scalars['Int']>;
};


export type MutationCreateUserArgs = {
  belongs: Scalars['String'];
  idInstitution: Scalars['Int'];
  password: Scalars['String'];
  status: Scalars['String'];
  typeu: Scalars['Int'];
  user: Scalars['String'];
};


export type MutationDeleteAbsenceArgs = {
  idAbsence: Scalars['Int'];
  idInstitution: Scalars['Int'];
};


export type MutationDeleteAchievementArgs = {
  idAchievement?: InputMaybe<Scalars['Int']>;
  idInstitution: Scalars['Int'];
};


export type MutationDeleteAchievementStudentArgs = {
  idAchievement: Scalars['Int'];
  idInstitution: Scalars['Int'];
};


export type MutationDeleteAreaArgs = {
  idArea?: InputMaybe<Scalars['Int']>;
  idInstitution: Scalars['Int'];
};


export type MutationDeleteCourseArgs = {
  idCourse: Scalars['Int'];
  idInstitution: Scalars['Int'];
};


export type MutationDeleteCourseStudentArgs = {
  idCourStu: Scalars['Int'];
  idInstitution: Scalars['Int'];
};


export type MutationDeleteEnrollmentArgs = {
  idEnrollment: Scalars['Int'];
  idInstitution: Scalars['Int'];
};


export type MutationDeleteFeaturedArgs = {
  idFeatured: Scalars['Int'];
  idInstitution: Scalars['Int'];
};


export type MutationDeleteGroupArgs = {
  idGroup: Scalars['Int'];
  idInstitution: Scalars['Int'];
};


export type MutationDeleteObservationArgs = {
  idInstitution: Scalars['Int'];
  idObservation: Scalars['Int'];
};


export type MutationDeleteRecommendationArgs = {
  idInstitution: Scalars['Int'];
  idRecommendation: Scalars['Int'];
};


export type MutationDeleteRecommendationStudentArgs = {
  idInstitution: Scalars['Int'];
  idRecStu: Scalars['Int'];
};


export type MutationDeleteScholarYearArgs = {
  idInstitution: Scalars['Int'];
  idYear: Scalars['Int'];
};


export type MutationDeleteStudentArgs = {
  idInstitution: Scalars['Int'];
  idStudent: Scalars['Int'];
};


export type MutationDeleteTeacherArgs = {
  idInstitution: Scalars['Int'];
  idTeacher: Scalars['Int'];
};


export type MutationDeleteTypeQualificationArgs = {
  idInstitution: Scalars['Int'];
  idTypeQual: Scalars['Int'];
};


export type MutationDeleteUserArgs = {
  idInstitution: Scalars['Int'];
  idUser: Scalars['Int'];
};


export type MutationPasswordChangeArgs = {
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type MutationPasswordResetArgs = {
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
  token: Scalars['String'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  password1: Scalars['String'];
  password2: Scalars['String'];
  username: Scalars['String'];
};


export type MutationResendActivationEmailArgs = {
  email: Scalars['String'];
};


export type MutationSendPasswordResetEmailArgs = {
  email: Scalars['String'];
};


export type MutationTokenAuthArgs = {
  email?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  username?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateAbsenceArgs = {
  day?: InputMaybe<Scalars['Int']>;
  hours?: InputMaybe<Scalars['Int']>;
  idAbsence: Scalars['Int'];
  idCourse?: InputMaybe<Scalars['Int']>;
  idInstitution: Scalars['Int'];
  idStudent?: InputMaybe<Scalars['Int']>;
  justification?: InputMaybe<Scalars['String']>;
  month?: InputMaybe<Scalars['Int']>;
  period?: InputMaybe<Scalars['Int']>;
  year?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateAccountArgs = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateAchievementArgs = {
  description?: InputMaybe<Scalars['String']>;
  idAchievement: Scalars['Int'];
  idCourse?: InputMaybe<Scalars['Int']>;
  idInstitution: Scalars['Int'];
  period?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateAchievementStudentArgs = {
  idAchieStu: Scalars['Int'];
  idAchievement?: InputMaybe<Scalars['Int']>;
  idInstitution: Scalars['Int'];
  idStudent?: InputMaybe<Scalars['Int']>;
  score?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateAreaArgs = {
  idArea: Scalars['Int'];
  idInstitution: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateCourseArgs = {
  average?: InputMaybe<Scalars['String']>;
  hour?: InputMaybe<Scalars['Int']>;
  idArea?: InputMaybe<Scalars['Int']>;
  idCourse: Scalars['Int'];
  idGroup?: InputMaybe<Scalars['Int']>;
  idInstitution: Scalars['Int'];
  idTeacher?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  percentage?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateCourseStudentArgs = {
  idCourStu: Scalars['Int'];
  idCourse?: InputMaybe<Scalars['Int']>;
  idInstitution: Scalars['Int'];
  idStudent?: InputMaybe<Scalars['Int']>;
  score1?: InputMaybe<Scalars['String']>;
  score2?: InputMaybe<Scalars['String']>;
  score3?: InputMaybe<Scalars['String']>;
  score4?: InputMaybe<Scalars['String']>;
  score5?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateEnrollmentArgs = {
  dateDesertion?: InputMaybe<Scalars['Date']>;
  idEnrollment: Scalars['Int'];
  idGroup?: InputMaybe<Scalars['Int']>;
  idInstitution: Scalars['Int'];
  idStudent?: InputMaybe<Scalars['Int']>;
  reasonDesertion?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateFeaturedArgs = {
  idFeatured: Scalars['Int'];
  idGroup?: InputMaybe<Scalars['Int']>;
  idInstitution: Scalars['Int'];
  idStudent?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateGroupArgs = {
  idGroup: Scalars['Int'];
  idInstitution: Scalars['Int'];
  idYear?: InputMaybe<Scalars['Int']>;
  level?: InputMaybe<Scalars['Int']>;
  representative?: InputMaybe<Scalars['String']>;
  sublevel?: InputMaybe<Scalars['String']>;
  workingTime?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateIndicatorStudentArgs = {
  idIndStu: Scalars['Int'];
  idIndicator?: InputMaybe<Scalars['Int']>;
  idInstitution: Scalars['Int'];
  idStudent?: InputMaybe<Scalars['Int']>;
  score?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateInstitutionArgs = {
  day?: InputMaybe<Scalars['String']>;
  direction?: InputMaybe<Scalars['String']>;
  idInstitution: Scalars['Int'];
  information?: InputMaybe<Scalars['Int']>;
  logo?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  month?: InputMaybe<Scalars['String']>;
  monthlyPay?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  payInscription?: InputMaybe<Scalars['Int']>;
  phone?: InputMaybe<Scalars['String']>;
  register?: InputMaybe<Scalars['String']>;
  responsable?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['Int']>;
  year?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateObservationArgs = {
  description?: InputMaybe<Scalars['String']>;
  idGroup?: InputMaybe<Scalars['Int']>;
  idInstitution: Scalars['Int'];
  idObservation: Scalars['Int'];
  idStudent?: InputMaybe<Scalars['Int']>;
  note?: InputMaybe<Scalars['String']>;
  period?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateRecommendationArgs = {
  description?: InputMaybe<Scalars['String']>;
  idCourse?: InputMaybe<Scalars['Int']>;
  idInstitution: Scalars['Int'];
  idRecommendation: Scalars['Int'];
  period?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateRecommendationStudentArgs = {
  idInstitution: Scalars['Int'];
  idRecStu: Scalars['Int'];
  idRecommendation?: InputMaybe<Scalars['Int']>;
  idStudent?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateScholarYearArgs = {
  comment?: InputMaybe<Scalars['String']>;
  idInstitution: Scalars['Int'];
  idYear: Scalars['Int'];
  rector?: InputMaybe<Scalars['String']>;
  secretary?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateStudentArgs = {
  birthday?: InputMaybe<Scalars['Date']>;
  direction?: InputMaybe<Scalars['String']>;
  father?: InputMaybe<Scalars['String']>;
  guardian?: InputMaybe<Scalars['String']>;
  idInstitution: Scalars['Int'];
  idStudent: Scalars['Int'];
  identification?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  mother?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  sex?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  typeId?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateTeacherArgs = {
  degree?: InputMaybe<Scalars['String']>;
  direction?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  idInstitution: Scalars['Int'];
  idTeacher: Scalars['Int'];
  identification?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  typeId?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateTypeQualificationArgs = {
  ceilingScore?: InputMaybe<Scalars['Float']>;
  floorScore?: InputMaybe<Scalars['Float']>;
  idInstitution: Scalars['Int'];
  idTypeQual: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateUserArgs = {
  belongs?: InputMaybe<Scalars['String']>;
  idInstitution: Scalars['Int'];
  idUser: Scalars['Int'];
  password?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  typeu?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Scalars['String']>;
};


export type MutationVerifyAccountArgs = {
  token: Scalars['String'];
};


export type MutationVerifyTokenArgs = {
  token: Scalars['String'];
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type ObservationType = {
  __typename?: 'ObservationType';
  description: Scalars['String'];
  idGroup: Scalars['Int'];
  idObservation: Scalars['ID'];
  idStudent: Scalars['Int'];
  note: Scalars['String'];
  period: Scalars['Int'];
  title: Scalars['String'];
};

/**
 * Obtain JSON web token for given user.
 *
 * Allow to perform login with different fields,
 * and secondary email if set. The fields are
 * defined on settings.
 *
 * Not verified users can login by default. This
 * can be changes on settings.
 *
 * If user is archived, make it unarchive and
 * return `unarchiving=True` on output.
 */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  refreshToken?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
  unarchiving?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserNode>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/**
 * Change account password when user knows the old password.
 *
 * A new token and refresh token are sent. User must be verified.
 */
export type PasswordChange = {
  __typename?: 'PasswordChange';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  refreshToken?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

/**
 * Change user password without old password.
 *
 * Receive the token that was sent by email.
 *
 * If token and new passwords are valid, update
 * user password and in case of using refresh
 * tokens, revoke all of them.
 *
 * Also, if user has not been verified yet, verify it.
 */
export type PasswordReset = {
  __typename?: 'PasswordReset';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  absenceByID?: Maybe<AbsenceType>;
  absences?: Maybe<Array<Maybe<AbsenceType>>>;
  achievementByID?: Maybe<AchievementType>;
  achievementStudents?: Maybe<Array<Maybe<Achievement_StudentType>>>;
  achievementStudentsByID?: Maybe<Achievement_StudentType>;
  achievements?: Maybe<Array<Maybe<AchievementType>>>;
  areaByID?: Maybe<AreaType>;
  areas?: Maybe<Array<Maybe<AreaType>>>;
  courseByID?: Maybe<CourseType>;
  courseStudentByID?: Maybe<Course_StudentType>;
  courseStudents?: Maybe<Array<Maybe<Course_StudentType>>>;
  courses?: Maybe<Array<Maybe<CourseType>>>;
  enrollmentByID?: Maybe<EnrollmentType>;
  enrollments?: Maybe<Array<Maybe<EnrollmentType>>>;
  featureByID?: Maybe<FeaturedType>;
  featured?: Maybe<Array<Maybe<FeaturedType>>>;
  groupByID?: Maybe<GroupType>;
  groups?: Maybe<Array<Maybe<GroupType>>>;
  indicatorStudentByID?: Maybe<Indicator_StudentType>;
  indicatorStudents?: Maybe<Array<Maybe<Indicator_StudentType>>>;
  institutionByID?: Maybe<InstitutionType>;
  institutions?: Maybe<Array<Maybe<InstitutionType>>>;
  me?: Maybe<UserNode>;
  observationByID?: Maybe<ObservationType>;
  observations?: Maybe<Array<Maybe<ObservationType>>>;
  recommendationByID?: Maybe<RecommendationType>;
  recommendationStudentByID?: Maybe<Recommendation_StudentType>;
  recommendationStudents?: Maybe<Array<Maybe<Recommendation_StudentType>>>;
  recommendations?: Maybe<Array<Maybe<RecommendationType>>>;
  scholarYearByID?: Maybe<Scholar_YearType>;
  scholarYears?: Maybe<Array<Maybe<Scholar_YearType>>>;
  studentByID?: Maybe<StudentType>;
  students?: Maybe<Array<Maybe<StudentType>>>;
  teacherByID?: Maybe<TeacherType>;
  teachers?: Maybe<Array<Maybe<TeacherType>>>;
  typeQualificationByID?: Maybe<Type_QualificationType>;
  typeQualifications?: Maybe<Array<Maybe<Type_QualificationType>>>;
  user?: Maybe<UserNode>;
  users?: Maybe<UserNodeConnection>;
};


export type QueryAbsenceByIdArgs = {
  id: Scalars['Int'];
  idInstitution: Scalars['Int'];
};


export type QueryAbsencesArgs = {
  idInstitution: Scalars['Int'];
};


export type QueryAchievementByIdArgs = {
  id?: InputMaybe<Scalars['Int']>;
  idInstitution: Scalars['Int'];
};


export type QueryAchievementStudentsArgs = {
  idInstitution: Scalars['Int'];
};


export type QueryAchievementStudentsByIdArgs = {
  id: Scalars['Int'];
  idInstitution: Scalars['Int'];
};


export type QueryAchievementsArgs = {
  idInstitution: Scalars['Int'];
};


export type QueryAreaByIdArgs = {
  id?: InputMaybe<Scalars['Int']>;
  idInstitution: Scalars['Int'];
};


export type QueryAreasArgs = {
  idInstitution: Scalars['Int'];
};


export type QueryCourseByIdArgs = {
  id?: InputMaybe<Scalars['Int']>;
  idInstitution: Scalars['Int'];
};


export type QueryCourseStudentByIdArgs = {
  id?: InputMaybe<Scalars['Int']>;
  idInstitution: Scalars['Int'];
};


export type QueryCourseStudentsArgs = {
  idInstitution: Scalars['Int'];
};


export type QueryCoursesArgs = {
  idInstitution: Scalars['Int'];
};


export type QueryEnrollmentByIdArgs = {
  id?: InputMaybe<Scalars['Int']>;
  idInstitution: Scalars['Int'];
};


export type QueryEnrollmentsArgs = {
  idInstitution: Scalars['Int'];
};


export type QueryFeatureByIdArgs = {
  id?: InputMaybe<Scalars['Int']>;
  idInstitution: Scalars['Int'];
};


export type QueryFeaturedArgs = {
  idInstitution: Scalars['Int'];
};


export type QueryGroupByIdArgs = {
  id?: InputMaybe<Scalars['Int']>;
  idInstitution: Scalars['Int'];
};


export type QueryGroupsArgs = {
  idInstitution: Scalars['Int'];
};


export type QueryIndicatorStudentByIdArgs = {
  id: Scalars['Int'];
  idInstitution: Scalars['Int'];
};


export type QueryIndicatorStudentsArgs = {
  idInstitution: Scalars['Int'];
};


export type QueryInstitutionByIdArgs = {
  id: Scalars['Int'];
};


export type QueryObservationByIdArgs = {
  id: Scalars['Int'];
  idInstitution: Scalars['Int'];
};


export type QueryObservationsArgs = {
  idInstitution: Scalars['Int'];
};


export type QueryRecommendationByIdArgs = {
  id?: InputMaybe<Scalars['Int']>;
  idInstitution: Scalars['Int'];
};


export type QueryRecommendationStudentByIdArgs = {
  id?: InputMaybe<Scalars['Int']>;
  idInstitution: Scalars['Int'];
};


export type QueryRecommendationStudentsArgs = {
  idInstitution: Scalars['Int'];
};


export type QueryRecommendationsArgs = {
  idInstitution: Scalars['Int'];
};


export type QueryScholarYearByIdArgs = {
  id: Scalars['Int'];
  idInstitution: Scalars['Int'];
};


export type QueryScholarYearsArgs = {
  idInstitution: Scalars['Int'];
};


export type QueryStudentByIdArgs = {
  id: Scalars['Int'];
  idInstitution: Scalars['Int'];
};


export type QueryStudentsArgs = {
  idInstitution: Scalars['Int'];
};


export type QueryTeacherByIdArgs = {
  id: Scalars['Int'];
  idInstitution: Scalars['Int'];
};


export type QueryTeachersArgs = {
  idInstitution: Scalars['Int'];
};


export type QueryTypeQualificationByIdArgs = {
  id: Scalars['Int'];
  idInstitution: Scalars['Int'];
};


export type QueryTypeQualificationsArgs = {
  idInstitution: Scalars['Int'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  status_Archived?: InputMaybe<Scalars['Boolean']>;
  status_SecondaryEmail?: InputMaybe<Scalars['String']>;
  status_Verified?: InputMaybe<Scalars['Boolean']>;
  username?: InputMaybe<Scalars['String']>;
  username_Icontains?: InputMaybe<Scalars['String']>;
  username_Istartswith?: InputMaybe<Scalars['String']>;
};

export type RecommendationType = {
  __typename?: 'RecommendationType';
  description: Scalars['String'];
  idCourse: Scalars['Int'];
  idRecommendation: Scalars['ID'];
  period: Scalars['Int'];
};

export type Recommendation_StudentType = {
  __typename?: 'Recommendation_StudentType';
  idRecStu: Scalars['ID'];
  idRecommendation: Scalars['Int'];
  idStudent: Scalars['Int'];
};

/**
 * Register user with fields defined in the settings.
 *
 * If the email field of the user model is part of the
 * registration fields (default), check if there is
 * no user with that email or as a secondary email.
 *
 * If it exists, it does not register the user,
 * even if the email field is not defined as unique
 * (default of the default django user model).
 *
 * When creating the user, it also creates a `UserStatus`
 * related to that user, making it possible to track
 * if the user is archived, verified and has a secondary
 * email.
 *
 * Send account verification email.
 *
 * If allowed to not verified users login, return token.
 */
export type Register = {
  __typename?: 'Register';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  refreshToken?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

/**
 * Sends activation email.
 *
 * It is called resend because theoretically
 * the first activation email was sent when
 * the user registered.
 *
 * If there is no user with the requested email,
 * a successful response is returned.
 */
export type ResendActivationEmail = {
  __typename?: 'ResendActivationEmail';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type Scholar_YearType = {
  __typename?: 'Scholar_YearType';
  comment: Scalars['String'];
  idYear: Scalars['Int'];
  rector: Scalars['String'];
  secretary: Scalars['String'];
};

/**
 * Send password reset email.
 *
 * For non verified users, send an activation
 * email instead.
 *
 * Accepts both primary and secondary email.
 *
 * If there is no user with the requested email,
 * a successful response is returned.
 */
export type SendPasswordResetEmail = {
  __typename?: 'SendPasswordResetEmail';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type StudentType = {
  __typename?: 'StudentType';
  birthday: Scalars['Date'];
  direction: Scalars['String'];
  father: Scalars['String'];
  guardian: Scalars['String'];
  idStudent: Scalars['ID'];
  identification: Scalars['String'];
  lastName: Scalars['String'];
  mother: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  sex: Scalars['String'];
  status: Scalars['String'];
  typeId: Scalars['Int'];
};

export type TeacherType = {
  __typename?: 'TeacherType';
  degree: Scalars['String'];
  direction: Scalars['String'];
  email: Scalars['String'];
  idTeacher: Scalars['ID'];
  identification: Scalars['String'];
  lastName: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  typeId: Scalars['Int'];
};

export type Type_QualificationType = {
  __typename?: 'Type_QualificationType';
  ceilingScore: Scalars['Float'];
  floorScore: Scalars['Float'];
  idTypeQual: Scalars['ID'];
  name: Scalars['String'];
  year?: Maybe<Scalars['Int']>;
};

export type UpdateAbsence = {
  __typename?: 'UpdateAbsence';
  absence?: Maybe<AbsenceType>;
};

/**
 * Update user model fields, defined on settings.
 *
 * User must be verified.
 */
export type UpdateAccount = {
  __typename?: 'UpdateAccount';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type UpdateAchievement = {
  __typename?: 'UpdateAchievement';
  achievement?: Maybe<AchievementType>;
};

export type UpdateAchievement_Student = {
  __typename?: 'UpdateAchievement_Student';
  achievementStudent?: Maybe<Achievement_StudentType>;
};

export type UpdateArea = {
  __typename?: 'UpdateArea';
  area?: Maybe<AreaType>;
};

export type UpdateCourse = {
  __typename?: 'UpdateCourse';
  course?: Maybe<CourseType>;
};

export type UpdateCourse_Student = {
  __typename?: 'UpdateCourse_Student';
  courseStudent?: Maybe<Course_StudentType>;
};

export type UpdateEnrollment = {
  __typename?: 'UpdateEnrollment';
  enrollment?: Maybe<EnrollmentType>;
};

export type UpdateFeatured = {
  __typename?: 'UpdateFeatured';
  featured?: Maybe<FeaturedType>;
};

export type UpdateGroup = {
  __typename?: 'UpdateGroup';
  group?: Maybe<GroupType>;
};

export type UpdateIndicator_Stundent = {
  __typename?: 'UpdateIndicator_Stundent';
  indicatorStudent?: Maybe<Indicator_StudentType>;
};

export type UpdateInstitution = {
  __typename?: 'UpdateInstitution';
  institution?: Maybe<InstitutionType>;
};

export type UpdateObservation = {
  __typename?: 'UpdateObservation';
  observation?: Maybe<ObservationType>;
};

export type UpdateRecommendation = {
  __typename?: 'UpdateRecommendation';
  recommendation?: Maybe<RecommendationType>;
};

export type UpdateRecommendation_Student = {
  __typename?: 'UpdateRecommendation_Student';
  recommendationStudent?: Maybe<Recommendation_StudentType>;
};

export type UpdateScholar_Year = {
  __typename?: 'UpdateScholar_Year';
  scholarYear?: Maybe<Scholar_YearType>;
};

export type UpdateStudent = {
  __typename?: 'UpdateStudent';
  student?: Maybe<StudentType>;
};

export type UpdateTeacher = {
  __typename?: 'UpdateTeacher';
  teacher?: Maybe<TeacherType>;
};

export type UpdateType_Qualification = {
  __typename?: 'UpdateType_Qualification';
  typeQualification?: Maybe<Type_QualificationType>;
};

export type UpdateUser = {
  __typename?: 'UpdateUser';
  user?: Maybe<UserType>;
};

export type UserNode = Node & {
  __typename?: 'UserNode';
  archived?: Maybe<Scalars['Boolean']>;
  dateJoined: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName: Scalars['String'];
  pk?: Maybe<Scalars['Int']>;
  secondaryEmail?: Maybe<Scalars['String']>;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String'];
  verified?: Maybe<Scalars['Boolean']>;
};

export type UserNodeConnection = {
  __typename?: 'UserNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `UserNode` and its cursor. */
export type UserNodeEdge = {
  __typename?: 'UserNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<UserNode>;
};

export type UserType = {
  __typename?: 'UserType';
  id: Scalars['ID'];
  password: Scalars['String'];
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String'];
};

/**
 * Verify user account.
 *
 * Receive the token that was sent by email.
 * If the token is valid, make the user verified
 * by making the `user.status.verified` field true.
 */
export type VerifyAccount = {
  __typename?: 'VerifyAccount';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type VerifyToken = {
  __typename?: 'VerifyToken';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  payload?: Maybe<Scalars['GenericScalar']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type RegularInstitutionFragment = { __typename?: 'InstitutionType', idInstitution: string, name: string, direction: string };

export type RegularLogoFragment = { __typename?: 'InstitutionType', logo?: string | null, idInstitution: string };

export type RegularTeacherFragment = { __typename?: 'TeacherType', name: string, lastName: string, degree: string };

export type LoginMutationVariables = Exact<{
  password: Scalars['String'];
  username: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', tokenAuth?: { __typename?: 'ObtainJSONWebToken', token?: string | null, errors?: any | null } | null };

export type GetInstitutionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetInstitutionsQuery = { __typename?: 'Query', institutions?: Array<{ __typename?: 'InstitutionType', idInstitution: string, name: string, direction: string } | null> | null };

export type GetLogoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLogoQuery = { __typename?: 'Query', institutions?: Array<{ __typename?: 'InstitutionType', logo?: string | null, idInstitution: string } | null> | null };

export type GetTeachersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTeachersQuery = { __typename?: 'Query', teachers?: Array<{ __typename?: 'TeacherType', name: string, lastName: string, degree: string } | null> | null };

export const RegularInstitutionFragmentDoc = gql`
    fragment RegularInstitution on InstitutionType {
  idInstitution
  name
  direction
}
    `;
export const RegularLogoFragmentDoc = gql`
    fragment RegularLogo on InstitutionType {
  logo
  idInstitution
}
    `;
export const RegularTeacherFragmentDoc = gql`
    fragment RegularTeacher on TeacherType {
  name
  lastName
  degree
}
    `;
export const LoginDocument = gql`
    mutation Login($password: String!, $username: String!) {
  tokenAuth(password: $password, username: $username) {
    token
    errors
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      password: // value for 'password'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const GetInstitutionsDocument = gql`
    query GetInstitutions {
  institutions {
    ...RegularInstitution
  }
}
    ${RegularInstitutionFragmentDoc}`;

/**
 * __useGetInstitutionsQuery__
 *
 * To run a query within a React component, call `useGetInstitutionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInstitutionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInstitutionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetInstitutionsQuery(baseOptions?: Apollo.QueryHookOptions<GetInstitutionsQuery, GetInstitutionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInstitutionsQuery, GetInstitutionsQueryVariables>(GetInstitutionsDocument, options);
      }
export function useGetInstitutionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInstitutionsQuery, GetInstitutionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInstitutionsQuery, GetInstitutionsQueryVariables>(GetInstitutionsDocument, options);
        }
export type GetInstitutionsQueryHookResult = ReturnType<typeof useGetInstitutionsQuery>;
export type GetInstitutionsLazyQueryHookResult = ReturnType<typeof useGetInstitutionsLazyQuery>;
export type GetInstitutionsQueryResult = Apollo.QueryResult<GetInstitutionsQuery, GetInstitutionsQueryVariables>;
export const GetLogoDocument = gql`
    query GetLogo {
  institutions {
    ...RegularLogo
  }
}
    ${RegularLogoFragmentDoc}`;

/**
 * __useGetLogoQuery__
 *
 * To run a query within a React component, call `useGetLogoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLogoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLogoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLogoQuery(baseOptions?: Apollo.QueryHookOptions<GetLogoQuery, GetLogoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLogoQuery, GetLogoQueryVariables>(GetLogoDocument, options);
      }
export function useGetLogoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLogoQuery, GetLogoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLogoQuery, GetLogoQueryVariables>(GetLogoDocument, options);
        }
export type GetLogoQueryHookResult = ReturnType<typeof useGetLogoQuery>;
export type GetLogoLazyQueryHookResult = ReturnType<typeof useGetLogoLazyQuery>;
export type GetLogoQueryResult = Apollo.QueryResult<GetLogoQuery, GetLogoQueryVariables>;
export const GetTeachersDocument = gql`
    query GetTeachers {
  teachers(idInstitution: 1000) {
    ...RegularTeacher
  }
}
    ${RegularTeacherFragmentDoc}`;

/**
 * __useGetTeachersQuery__
 *
 * To run a query within a React component, call `useGetTeachersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTeachersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTeachersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTeachersQuery(baseOptions?: Apollo.QueryHookOptions<GetTeachersQuery, GetTeachersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTeachersQuery, GetTeachersQueryVariables>(GetTeachersDocument, options);
      }
export function useGetTeachersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTeachersQuery, GetTeachersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTeachersQuery, GetTeachersQueryVariables>(GetTeachersDocument, options);
        }
export type GetTeachersQueryHookResult = ReturnType<typeof useGetTeachersQuery>;
export type GetTeachersLazyQueryHookResult = ReturnType<typeof useGetTeachersLazyQuery>;
export type GetTeachersQueryResult = Apollo.QueryResult<GetTeachersQuery, GetTeachersQueryVariables>;