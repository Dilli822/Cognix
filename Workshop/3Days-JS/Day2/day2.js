

function Get() {
    const token = '26a24a5285637487910775b175eddd908637ce33f74b33676c358181dc1f34b91';

    // fetch('https://api.medium.com/v1/me', {
    //     method: 'GET',
    //     headers: {
    //         'Authorization': `Bearer ${token}`,
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json',
    //         'Accept-Charset': 'utf-8'
    //     }
    // })
    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error('Failed to fetch data');
    //     }
    //     return response.json();
    // })
    // .then(data => {
    //     console.log(data);
    //     // Display or process the data as needed
    // })
    // .catch(error => {
    //     console.error('Error fetching data:', error);
    // });

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'https://api.medium.com/v1/me';

fetch( apiUrl, {
    method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8'
        }
})
.then(response => {
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
})
.then(data => {
    console.log(data);
    // Process the data as needed
})
.catch(error => {
    console.error('Error fetching data:', error);
});


}



Get();


function Post() {
    // {
    //     "title": "Liverpool FC",
    //     "contentFormat": "html",
    //     "content": "<h1>Liverpool FC</h1><p>You’ll never walk alone.</h1>",
    //     "canonicalUrl": "http://jamietalbot.com/posts/liverpool-fc",
    //     "tags": ["football", "sport", "Liverpool"],
    //     "publishStatus": "public"
    //   }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("contentFormat", contentFormat);
    formData.append("content", content);
    formData.append("canonicalUrl", canonicalUrl);
    formData.append("tags", tags);
    formData.append("publishStatus", publishStatus);

    if (imageFile) {
        formData.append("canonicalUrl", imageFile);
      }

    const token = '26a24a5285637487910775b175eddd908637ce33f74b33676c358181dc1f34b91';

    fetch('https://api.medium.com/v1/users/1f8a7ac163de0abb3f25544fe97aff86df627d01583af5b23173eda6cf4e2ecf5/posts {', 
    {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8'
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("submitted data is -" + data);
        })
        .catch((error) => {
          setLoading(false);
          console.error("Error posting blog:", error);
          message.error("Failed to post blog. Please try again.");
        });
}

Post();

function Put() {
    const token = '26a24a5285637487910775b175eddd908637ce33f74b33676c358181dc1f34b91';

    fetch('https://api.medium.com/v1/users/1f8a7ac163de0abb3f25544fe97aff86df627d01583af5b23173eda6cf4e2ecf5/posts json format data {', 
    {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8'
        }
    })

    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
    })
    .then(data => {
        console.log("POSTED SUCCESSFULLY");
        // Display or process the data as needed
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

Put();



function Delete(){
    const token = "";

}


