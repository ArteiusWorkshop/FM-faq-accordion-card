import { SyntheticEvent, useState } from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Image from "next/image";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} {...props} />
))(() => ({
  border: `1px solid hsl(240, 5%, 91%)`,
  borderLeft: 0,
  borderRight: 0,
  borderTop: 0,
  "&:first-of-type": {
    borderTop: "0",
  },
  "&:last-of-type": {
    borderBottom: 0,
  },

  "&:before": {
    display: "none",
  },
  padding: "10px",
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 .799l4 4 4-4"
          stroke="#F47B56"
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    }
    {...props}
  />
))(() => ({
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  borderTop: "0",
}));

export const AccordionD = () => {
  const [expanded, setExpanded] = useState<string | false>("");

  const handleChange =
    (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
      first == "230px" ? setfirst("200px") : setfirst("230px");
    };

  const [first, setfirst] = useState("230px");

  const handleMouseOver = () => {
    first == "230px" ? setfirst("200px") : setfirst("230px");
  };
  return (
    <Box
      minHeight="510px"
      minWidth="920px"
      display="flex"
      flexDirection="row"
      justifyContent="center"
      sx={{
        backgroundColor: "white",
        borderRadius: "25px",
        overflow: "hidden",
      }}
      onMouseOver={handleMouseOver}
    >
      <Box height="100%" width="470px" className="backD">
        <Box position="relative" left="-65px" top="80px">
          <Image
            width="400px"
            height="320px"
            src="/img/illustration-woman-online-desktop.svg"
          />
        </Box>
        <Box position="absolute" left={first} top="430px">
          <Image
            width="150px"
            height="130px"
            src="/img/illustration-box-desktop.svg"
          />
        </Box>
      </Box>
      <Box
        height="100%"
        width="450px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <Typography variant="h4" fontWeight={700} pl={2} pb={4}>
            FAQ
          </Typography>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography
              className={expanded === "panel1" ? "active" : "inactive"}
            >
              How many team members can I invite?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="faq">
              You can invite up to 2 additional users on the Free plan. There is
              no limit on team members for the Premium plan.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography
              className={expanded === "panel2" ? "active" : "inactive"}
            >
              What is the maximum file upload size?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="faq">
              No more than 2GB. All files in your account must fit your allotted
              storage space.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography
              className={expanded === "panel3" ? "active" : "inactive"}
            >
              How do I reset my password?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="faq">
              Click “Forgot password” from the login page or “Change password”
              from your profile page. A reset link will be emailed to you.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography
              className={expanded === "panel4" ? "active" : "inactive"}
            >
              Can I cancel my subscription?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="faq">
              Yes! Send us a message and we’ll process your request no questions
              asked.
            </Typography>
          </AccordionDetails>
        </Accordion>{" "}
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography
              className={expanded === "panel5" ? "active" : "inactive"}
            >
              Do you provide additional support?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="faq">
              Chat and email support is available 24/7. Phone lines are open
              during normal business hours.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};
