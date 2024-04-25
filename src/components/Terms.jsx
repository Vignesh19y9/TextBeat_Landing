import React from "react";

const Terms = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>

      <section>
        <h2 className="text-2xl font-bold mb-2">1. Acceptance of Terms</h2>
        <p className="text-lg">
          By accessing and using Text Beat, you agree to comply with and be
          bound by the following terms and conditions of use.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">2. Description of Service</h2>
        <p className="text-lg">
          Text Beat is a video editing application designed for use on iOS
          devices. The service provided by Text Beat allows users to edit videos
          locally on their devices without requiring internet connectivity.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">3. User Conduct</h2>
        <p className="text-lg">
          Users of Text Beat must agree not to use the service for any illegal
          or unauthorized purpose. Users are solely responsible for their
          conduct while using the service.
        </p>
      </section>

      {/* Add more sections as necessary */}
    </div>
  );
};

export default Terms;
