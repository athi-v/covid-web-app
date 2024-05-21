import { Button, Typography } from "@mui/material";
import PageLayout from "../../layout/PageLayout";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <PageLayout>
      <Typography>
        We put science to work to build a healthier, safer world
      </Typography>
      <Typography>
        ByteData leads and champions global efforts to achieve better health for
        all. By connecting countries, people and partners, we strive to give
        everyone, everywhere an equal chance at a safe and healthy life.
      </Typography>
      <Typography>
        From emerging epidemics such as COVID-19 to the persistent threat of
        communicable diseases including HIV, malaria and tuberculosis and
        chronic diseases such as diabetes, heart disease and cancer, we bring
        together 194 countries and work on the frontlines in 150+ locations to
        confront the biggest health challenges of our time and measurably
        advance the well-being of the world’s people.
      </Typography>
      <Button disableElevation variant="contained" onClick={() => navigate('/dashboard')}>
        Dashboad
      </Button>
    </PageLayout>
  );
};

export default HomePage;
