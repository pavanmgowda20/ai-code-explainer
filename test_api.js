
import fetch from 'node-fetch';

async function test() {
  try {
    const response = await fetch('http://localhost:3000/api/explain', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: "console.log('dynamic import test')" })
    });
    
    if (response.ok) {
      const data = await response.json();
      console.log('Success:', data);
    } else {
      const text = await response.text();
      console.log('Error Status:', response.status);
      console.log('Error Body:', text);
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

test();
