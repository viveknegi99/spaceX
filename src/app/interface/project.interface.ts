export interface IProject{
  links: {
    mission_patch_small: string
  };
  mission_name: string;
  mission_id: string[];
  launch_year: string | number;
  launch_success: boolean;
  rocket: {
    first_stage: {
      cores: any[]
    }
  }


}
