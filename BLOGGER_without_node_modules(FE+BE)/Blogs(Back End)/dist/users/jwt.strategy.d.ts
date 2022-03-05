import { JwtPayload } from "./jwt.payload";
import { UserRepository } from "./users.repository";
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private userRepository;
    constructor(userRepository: UserRepository);
    validate(payload: JwtPayload): Promise<import("../entity/user.entity").UserEntity>;
}
export {};
