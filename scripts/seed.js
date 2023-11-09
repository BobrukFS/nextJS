
const {createClient} = require("@supabase/supabase-js");

// Create a single supabase client for interacting with your database
const supabase = createClient('https://jaeisuwlgkfbdmaatbvz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphZWlzdXdsZ2tmYmRtYWF0YnZ6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTQ3NDk3MCwiZXhwIjoyMDE1MDUwOTcwfQ.W0d7n-SdISij9wKb08_FuASsPX7Z89vL40Tp8M3q76Y')

async function get(){


  const { data, error } = await supabase.from('movies').select('nombre');
          
  console.log(data)
  
}

get()

