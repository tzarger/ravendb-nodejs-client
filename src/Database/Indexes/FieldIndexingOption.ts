export type FieldIndexingOption = 'No' | 'Analyzed' | 'NotAnalyzed';

export class FieldIndexingOptions {
  public static readonly No: FieldIndexingOption = 'No';
  public static readonly Analyzed: FieldIndexingOption = 'Analyzed';
  public static readonly NotAnalyzed: FieldIndexingOption = 'NotAnalyzed';
}