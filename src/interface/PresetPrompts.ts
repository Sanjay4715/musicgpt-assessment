export interface PromptState {
  id: string;
  status: string;
  tags: string;
  prompt: string;
  need_file: boolean;
  created_at: string;
  deleted_at: string | null;
}

export interface CategorizedPrompt {
  tag: string;
  prompts: PromptState[];
}

export interface PromptStore {
  prompts: PromptState[];
  getPrompts(): Promise<void>;
}
