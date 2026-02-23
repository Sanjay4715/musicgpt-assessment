import { API_STATUS } from "@/enums";

export interface GeneratedList {
  id: string;
  created_at?: string;
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
  progress?: number;
  file_output_0?: string;
  lyrics_output?: string;
  lyrics_output_timestamped?: string;
  audio_length_ms?: number;
}

export type GeneratedListItemProps = GeneratedList;

export type APIStatus =
  | API_STATUS.PENDING
  | API_STATUS.FETCHING
  | API_STATUS.FAIL
  | API_STATUS.SUCCESS;

export interface GeneratedListStore {
  apiStatus: APIStatus;
  audios: GeneratedList[];
  unprocessed: GeneratedList[];
  sortedGeneratedList: GeneratedList[];
  getGeneratedAudios(): Promise<void>; // <-- rename here (was getPropmts)
}

export interface GenerationItemProcessingProps {
  items: GeneratedList;
}
