export interface MusicControlsProps {
  fromMobilePlayer?: boolean;
  isPlaying: boolean;
  onPlayPause: () => void;
}

export interface MusicTimerProps {
  currentTime: number;
  duration: number;
  className?: string;
}

export interface MusicTimelineProps extends MusicTimerProps {
  isDrawer?: boolean;
  isDragging: boolean;
  handleMouseDown: (e: React.MouseEvent) => void;
  progress: number;
  percent: number;
  timelineRef: React.RefObject<HTMLButtonElement | null>;
}

export interface VolumeProps {
  volume: number;
  handleVolume: (value: number) => void;
}

export interface MusicPlayerOptionsProps extends VolumeProps {
  isExpanded: boolean;
  handleExpanded: (value: boolean) => void;
}

export interface MusicThumbailAndTitleProps {
  isMobilePlayer?: boolean;
}

export interface MusicPlayerProps extends MusicTimerProps {
  togglePlay: () => void;
  isPlaying: boolean;
}

export interface DrawerMusicPlayerProps
  extends MusicTimelineProps, MusicPlayerProps {}
