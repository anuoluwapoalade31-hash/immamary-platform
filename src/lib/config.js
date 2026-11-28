export const organization = {
  name: 'IMMAMARY MINISTRIES INTERNATIONAL',
  tagline: 'Recruiting | Mobilizing | Training | Sending',
  country: 'Nigeria',
  email: 'Immamaryngo@gmail.com',
  arms: [
    { id: 'education', label: 'Education', name: 'Global Kingdom Harvest Institute', short: 'Equipping Christian leaders for effective service.', path: '/education', color: 'green' },
    { id: 'venture', label: 'Venture', name: 'IMMAMARY VENTURES', short: 'Practical initiatives for holistic community development.', path: '/venture', color: 'gold' },
    { id: 'missions', label: 'Missions', name: 'Missions & Community Transformation', short: 'Proclaiming the Gospel and demonstrating God’s love.', path: '/missions', color: 'blue' },
  ],
};

// Add your Supabase project values to .env.local. The public website works without them;
// forms show a clear setup message until the backend is configured.
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
