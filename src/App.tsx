import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { AboutPage } from "./pages/AboutPage";
import { CareerMentoringPage } from "./pages/CareerMentoringPage";
import { ContactPage } from "./pages/ContactPage";
import { CorporateTrainingPage } from "./pages/CorporateTrainingPage";
import { FacultyDevelopmentPage } from "./pages/FacultyDevelopmentPage";
import { HomePage } from "./pages/HomePage";
import { TestimonialPage } from "./pages/TestimonialPage";
import { PrestigeTestimonialPage } from "./pages/PrestigeTestimonialPage";
import { StudentProgramsPage } from "./pages/StudentProgramsPage";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/corporate-training" element={<CorporateTrainingPage />} />
        <Route path="/student-programs" element={<StudentProgramsPage />} />
        <Route path="/faculty-development" element={<FacultyDevelopmentPage />} />
        <Route path="/career-mentoring" element={<CareerMentoringPage />} />
        <Route path="/prestige-testimonial" element={<PrestigeTestimonialPage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
