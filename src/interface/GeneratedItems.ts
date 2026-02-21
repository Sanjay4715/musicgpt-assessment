export interface GeneratedList {
  id: string;
  created_at: string;
  user_id?: string;
  title?: string;
  image_custom?: string;
  image_custom_thumbnail?: string;
  input_prompt?: string;
  prompt?: string;
  version_string?: string;
  error_message?: string;
  error_message_detail?: string;
  status?: string;
  error_tag?: string;
}

export type GeneratedListItemProps = GeneratedList;

export interface GeneratedListStore {
  audios: GeneratedList[];
  unprocessed: GeneratedList[];
  sortedGeneratedList: GeneratedList[];
  getGeneratedAudios(): Promise<void>; // <-- rename here (was getPropmts)
}
