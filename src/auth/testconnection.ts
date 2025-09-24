import supabase from './baseClient'

export async function testConnection() {
  const { data, error } = await supabase.from('DATA').select('id').limit(1)
  
  if (error) {
    console.error('❌ Connection failed:', error.message)
    return false
  }

  console.log('✅ Connection successful! Sample data:', data)
  return true
}

export default testConnection;