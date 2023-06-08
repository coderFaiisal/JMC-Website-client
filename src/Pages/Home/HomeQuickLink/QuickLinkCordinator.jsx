import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const QuickLinkCordinator = () => {
  return (
    <div className="my-2 lg:my-12">
      <Card className="w-72 mx-auto">
        <CardHeader floated={false}>
          <img
            className="h-56 w-full"
            src="https://daffodilvarsity.edu.bd/images/admin/sharmina.jpg"
            alt="profile-picture"
          />
        </CardHeader>
        <CardBody className="text-center grid gap-2">
          <Typography variant="h4" color="blue-gray">
            Ms. Sharmina Hoque
          </Typography>
          <Typography color="blue" className="font-medium" textGradient>
            Senior Coordination Officer
          </Typography>
          <Typography className=" text-xs">
            Email:
            <a href="jmcoffice@daffodilvarsity.edu.bd" target="_blank">
              jmcoffice@daffodilvarsity.edu.bd
            </a>
          </Typography>
          <Typography className="text-black text-xs">
            Phone: +8801847334775
          </Typography>
          <Typography className="text-black text-xs">Ext: 24111</Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default QuickLinkCordinator;
