import { supabase } from '../lib/supabase';

export const useAnalytics = () => {
  const trackProjectView = async (projectName: string, projectLink: string) => {
    try {
      const { error } = await supabase
        .from('project_views')
        .insert([
          {
            project_name: projectName,
            referrer: projectLink,
            viewed_at: new Date().toISOString(),
          }
        ]);

      if (error) {
        console.error('Error tracking project view:', error);
      }
    } catch (error) {
      console.error('Error tracking project view:', error);
    }
  };

  const trackResumeDownload = async () => {
    try {
      const { error } = await supabase
        .from('resume_downloads')
        .insert([
          {
            downloaded_at: new Date().toISOString(),
            user_agent: navigator.userAgent,
          }
        ]);

      if (error) {
        console.error('Error tracking resume download:', error);
      }
    } catch (error) {
      console.error('Error tracking resume download:', error);
    }
  };

  return {
    trackProjectView,
    trackResumeDownload,
  };
};
