import { createClient } from '@supabase/supabase-js'
const URL = 'https://stqwppeuruezaxzdlret.supabase.co'
const API_KEY = 'sb_publishable_5uI7EbjU_udEw3sxYYGgDQ_KmlYHGO4'
export const supabase = createClient(URL, API_KEY)