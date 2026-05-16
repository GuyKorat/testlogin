async function saveData(fullname,email, tel) {

  const SUPABASE_URL = "https://ygvnvfdfecvjgppieuce.supabase.co";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlndm52ZmRmZWN2amdwcGlldWNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg5MTUwODcsImV4cCI6MjA5NDQ5MTA4N30.fOZZfLTYKa1q7e7NdLeJMO6833-m384Qqg-berrfp5s";

  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/users`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_KEY,
        "Authorization": `Bearer ${SUPABASE_KEY}`
      },
      body: JSON.stringify({
        fullname: fullname,
		email:email,
        tel: tel
      })
    }
  );

  const result = await response.json();

  console.log(result);
}

// ทดลองเรียกใช้งาน
saveData("สมชาย","sp000@gmail.com" ,"0812345678");
