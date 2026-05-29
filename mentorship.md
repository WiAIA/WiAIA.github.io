---
title: "Mentorship Program"
description: "Join our mentorship program to connect with experienced mentors or inspire the next generation of women in AI and analytics"
layout: page
permalink: /mentorship/
---

{% include hero.html
  title="Transform Your Career Through Mentorship"
  subtitle="Connect with experienced mentors who guide your growth in AI, data science, and analytics"
  primary_text="Apply as Mentee"
  primary_link="/contact/?subject=Mentee%20Application"
  secondary_text="Become a Mentor"
  secondary_link="/contact/?subject=Mentor%20Application"
%}

<style>
.steps-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 4rem 0;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}

.step-card {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    border: 1px solid #e5e7eb;
    transition: all 0.3s ease;
    position: relative;
}

.step-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    border-color: #8b5cf6;
}

.step-number {
    position: absolute;
    top: -20px;
    left: 20px;
    background: #8b5cf6;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.25rem;
}

.step-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 1.5rem 0 1rem;
    color: #1f2937;
}

.step-description {
    color: #6b7280;
    line-height: 1.6;
}

.benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 3rem;
    margin: 4rem 0;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
}

.benefit-card {
    background: #f9fafb;
    border-radius: 12px;
    padding: 2rem;
    border: 1px solid #e5e7eb;
}

.benefit-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #8b5cf6;
}

.benefit-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.benefit-list li {
    padding: 0.75rem 0;
    position: relative;
    padding-left: 2rem;
    color: #4b5563;
    line-height: 1.6;
}

.benefit-list li:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #8b5cf6;
    font-weight: bold;
}

.faq-container {
    max-width: 800px;
    margin: 4rem auto;
    padding: 0 1rem;
}

.faq-item {
    background: white;
    border-radius: 8px;
    margin-bottom: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    border: 1px solid #e5e7eb;
    overflow: hidden;
}

.faq-question {
    padding: 1.25rem;
    cursor: pointer;
    font-weight: 600;
    color: #1f2937;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background-color 0.2s ease;
}

.faq-question:hover {
    background-color: #f9fafb;
}

.faq-question:after {
    content: "+";
    font-size: 1.5rem;
    color: #8b5cf6;
    transition: transform 0.3s ease;
}

.faq-item.active .faq-question:after {
    transform: rotate(45deg);
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    padding: 0 1.25rem;
}

.faq-item.active .faq-answer {
    max-height: 500px;
    padding: 0 1.25rem 1.25rem;
    color: #6b7280;
    line-height: 1.6;
}

.program-overview {
    text-align: center;
    max-width: 800px;
    margin: 4rem auto;
    padding: 0 1rem;
}

.program-overview h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 1.5rem;
}

.program-overview p {
    font-size: 1.25rem;
    color: #6b7280;
    line-height: 1.8;
}

.program-expectations {
    max-width: 900px;
    margin: 4rem auto;
    padding: 0 1rem;
}

.program-expectations h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 2rem;
    text-align: center;
}

.expectations-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 3rem;
}

.expectations-section h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #8b5cf6;
}

.expectations-list {
    list-style: none;
    padding: 0;
}

.expectations-list li {
    padding: 0.5rem 0;
    padding-left: 1.5rem;
    position: relative;
    color: #4b5563;
    line-height: 1.6;
}

.expectations-list li:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #8b5cf6;
}
</style>

<div class="program-overview">
    <h2>Our 6-Month Mentorship Journey</h2>
    <p>
        The Women in AI & Analytics Mentoring Program connects passionate women with experienced professionals in the fields of artificial intelligence, data science, and analytics. Our structured 6-month program is designed to create meaningful mentorship relationships that foster professional growth, career advancement, and lasting connections. Whether you're looking to accelerate your career or give back to the community, our program provides the framework, support, and community you need to succeed.
    </p>
</div>

<div class="steps-container">
    <div class="step-card">
        <div class="step-number">1</div>
        <h3 class="step-title">Apply Online</h3>
        <p class="step-description">
            Complete our online application form with detailed information about your background, goals, and preferences. Tell us about your career aspirations and what you hope to achieve through the mentorship experience.
        </p>
    </div>

    <div class="step-card">
        <div class="step-number">2</div>
        <h3 class="step-title">Application Review</h3>
        <p class="step-description">
            Our team carefully reviews all applications to ensure a good fit for the program. We verify your information and prepare you for the matching process, ensuring the best possible outcomes for both mentors and mentees.
        </p>
    </div>

    <div class="step-card">
        <div class="step-number">3</div>
        <h3 class="step-title">Personalized Matching</h3>
        <p class="step-description">
            Using our proprietary matching algorithm and careful consideration of goals, industry, personality, and experience, we pair you with the perfect mentor or mentee for a mutually beneficial relationship.
        </p>
    </div>

    <div class="step-card">
        <div class="step-number">4</div>
        <h3 class="step-title">6-Month Partnership</h3>
        <p class="step-description">
            Begin your structured mentorship journey with regular meetings, goal setting, and progress tracking. We provide ongoing support, resources, and check-ins to ensure your relationship thrives.
        </p>
    </div>

    <div class="step-card">
        <div class="step-number">5</div>
        <h3 class="step-title">Community & Growth</h3>
        <p class="step-description">
            Join our vibrant community of women in AI and analytics. Participate in events, workshops, and networking opportunities that extend beyond your mentorship partnership.
        </p>
    </div>
</div>

<div class="benefits-grid">
    <div class="benefit-card">
        <h3 class="benefit-title">Benefits for Mentees</h3>
        <ul class="benefit-list">
            <li>Receive personalized guidance from experienced professionals in AI, data science, or analytics</li>
            <li>Gain insights into industry trends, best practices, and emerging technologies</li>
            <li>Build a professional network that opens doors to new opportunities</li>
            <li>Develop essential career skills and leadership abilities</li>
            <li>Get honest feedback on your progress and areas for improvement</li>
            <li>Access exclusive resources, workshops, and industry events</li>
            <li>Boost your confidence and overcome professional barriers</li>
            <li>Learn from real-world experiences and practical advice</li>
        </ul>
    </div>

    <div class="benefit-card">
        <h3 class="benefit-title">Benefits for Mentors</h3>
        <ul class="benefit-list">
            <li>Make a meaningful impact by guiding the next generation of women in tech</li>
            <li>Develop and refine your leadership and coaching skills</li>
            <li>Expand your professional network with diverse connections</li>
            <li>Gain fresh perspectives and new insights from mentees</li>
            <li>Enhance your communication and teaching abilities</li>
            <li>Give back to the community and contribute to diversity in tech</li>
            <li>Strengthen your understanding of current industry trends</li>
            <li>Fulfill personal growth while helping others succeed</li>
        </ul>
    </div>
</div>

<div class="program-expectations">
    <h2>Program Expectations</h2>

    <div class="expectations-grid">
        <div class="expectations-section">
            <h3>Mentor Expectations</h3>
            <ul class="expectations-list">
                <li>Commit to at least 2-4 hours per month of mentorship time</li>
                <li>Schedule regular meetings with your mentee (minimum twice monthly)</li>
                <li>Provide honest, constructive feedback and guidance</li>
                <li>Be punctual and prepared for all meetings</li>
                <li>Share relevant resources and industry insights</li>
                <li>Respect your mentee's time and goals</li>
                <li>Maintain confidentiality and trust in the relationship</li>
                <li>Complete mid-point and end-of-program evaluations</li>
            </ul>
        </div>

        <div class="expectations-section">
            <h3>Mentee Expectations</h3>
            <ul class="expectations-list">
                <li>Be proactive and take initiative in the mentorship relationship</li>
                <li>Be prepared for meetings with specific questions or topics</li>
                <li>Implement feedback and show commitment to growth</li>
                <li>Respect your mentor's time and expertise</li>
                <li>Keep your mentor updated on your progress and challenges</li>
                <li>Be open to constructive criticism and different perspectives</li>
                <li>Maintain professional etiquette and communication</li>
                <li>Complete mid-point and end-of-program evaluations</li>
            </ul>
        </div>
    </div>
</div>

<div class="faq-container">
    <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #1f2937;">Frequently Asked Questions</h2>

    <div class="faq-item">
        <div class="faq-question" onclick="this.parentElement.classList.toggle('active')">
            Who is eligible to participate in the mentorship program?
            <span></span>
        </div>
        <div class="faq-answer">
            We welcome women at all career levels who are passionate about AI, data science, or analytics. This includes students, early-career professionals, mid-career experts, and seasoned executives. Both mentors and mentees should have a genuine interest in growing their careers or helping others grow in these fields.
        </div>
    </div>

    <div class="faq-item">
        <div class="faq-question" onclick="this.parentElement.classList.toggle('active')">
            How are mentor-mentee pairs matched?
            <span></span>
        </div>
        <div class="faq-answer">
            Our matching process considers multiple factors including career goals, industry experience, technical skills, personality compatibility, and location preferences. We use a combination of algorithmic matching and human oversight to ensure the best possible partnerships. We also take into account specific skills mentees want to develop and mentors can offer.
        </div>
    </div>

    <div class="faq-item">
        <div class="faq-question" onclick="this.parentElement.classList.toggle('active')">
            Can the mentorship be conducted remotely?
            <span></span>
        </div>
        <div class="faq-answer">
            Absolutely! We encourage and support remote mentorship through video calls, phone conversations, and messaging platforms. Many of our successful pairs meet entirely online. We also provide guidelines for effective remote communication and help facilitate in-person meetings when both participants are in the same geographic area.
        </div>
    </div>

    <div class="faq-item">
        <div class="faq-question" onclick="this.parentElement.classList.toggle('active')">
            Is there a cost to participate in the program?
            <span></span>
        </div>
        <div class="faq-answer">
            The mentorship program is completely free of charge. We believe that financial barriers should not prevent women from accessing mentorship opportunities. Our program is funded through donations, sponsorships, and grants to maintain accessibility for all participants.
        </div>
    </div>

    <div class="faq-item">
        <div class="faq-question" onclick="this.parentElement.classList.toggle('active')">
            What is the time commitment required?
            <span></span>
        </div>
        <div class="faq-answer">
            We recommend committing 2-4 hours per month for the 6-month program. This typically includes two monthly meetings (60-90 minutes each) plus time for preparation, follow-up, and occasional communication. Additional time may be needed for specific projects or events, but this is flexible based on your availability and goals.
        </div>
    </div>

    <div class="faq-item">
        <div class="faq-question" onclick="this.parentElement.classList.toggle('active')">
            What kind of support is provided during the mentorship?
            <span></span>
        </div>
        <div class="faq-answer">
            We provide comprehensive support including regular check-ins with our program coordinators, access to exclusive resources and workshops, networking events, and a supportive community of fellow participants. We also offer guidance on goal setting, communication strategies, and conflict resolution to ensure successful mentorship relationships.
        </div>
    </div>

    <div class="faq-item">
        <div class="faq-question" onclick="this.parentElement.classList.toggle('active')">
            Can I apply to be both a mentor and mentee?
            <span></span>
        </div>
        <div class="faq-answer">
            While it's possible to both mentor others and seek mentorship simultaneously, we recommend focusing on one role at a time to ensure you can give proper attention to both your mentoring responsibilities and your personal growth goals. In some cases, we may approve dual participation based on availability and capacity.
        </div>
    </div>

    <div class="faq-item">
        <div class="faq-question" onclick="this.parentElement.classList.toggle('active')">
            What happens if the mentorship relationship isn't working out?
            <span></span>
        </div>
        <div class="faq-answer">
            We understand that not every pairing is perfect. If issues arise, we encourage open communication between both parties first. If the relationship cannot be resolved, our coordinators will mediate and, if necessary, help you find a new mentor or mentee. We want to ensure everyone has a positive and productive experience.
        </div>
    </div>
</div>

{% include cta-section.html %}