import React from "react";

const Privacy = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <section>
        <h2 className="text-2xl font-bold mb-2">1. Information Collection</h2>
        <p className="text-lg">
          Text Beat does not collect any personal information from its users.
          The application operates fully offline, and no data is transmitted to
          or stored on external servers.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">2. Log Data</h2>
        <p className="text-lg">
          Text Beat may collect certain information automatically, including the
          type of device you use, your device's unique identifier, the IP
          address of your device, your operating system, and other diagnostic
          data. This information is used solely for the purpose of improving the
          app and providing a better user experience.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">3. Third-party Services</h2>
        <p className="text-lg">
          Text Beat may display advertisements from third-party ad networks.
          These ads may use cookies and similar technologies to personalize
          content and ads, provide social media features, and analyze our
          traffic. By using Text Beat, you consent to the use of these
          technologies for advertising purposes.
        </p>
      </section>

      {/* Add more sections as necessary */}
    </div>
  );
};

export default Privacy;
