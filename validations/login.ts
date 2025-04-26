import * as v from "valibot";

const LoginSchema = v.object({
    email: v.pipe(v.string('این فیلد باید متنی باشد'), v.email('ایمیل نامعتبر است')),
    password: v.pipe(v.string('این فیلد باید متنی باشد'), v.minLength(8, 'رمز عبور باید حداقل 8 کاراکتر باشد')),
});

type LoginData = v.InferOutput<typeof LoginSchema>;

export function validate(data: LoginData) {
    const validatedData = v.safeParse(LoginSchema, data);
    if (validatedData.issues) {
        return validatedData.issues.reduce((acc, issue) => {
            if (issue.path && typeof issue.path[0].key === 'string') {
                acc[issue.path[0].key] = issue.message;
            }
            return acc;
          }, {} as Record<string, string>);
    }
    return true;
}