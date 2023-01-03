import { Tecnologia } from "./tecnologias.model";

export class LearningServicios{
    tecnologias:Tecnologia[]=[
        new Tecnologia("BootStrap", "../../assets/Bootstrap_logo.svg.png"),
        new Tecnologia("TypeScript", "../../assets/typescript.png"),
        new Tecnologia("Angular", "../../assets/anglar.png"),
        new Tecnologia("SpringBoot", "../../assets/spring boot.png"),
        new Tecnologia("AWS", "../../assets/aws-logo.png"),
        new Tecnologia("Docker", "../../assets/docker.png")
    ];
}