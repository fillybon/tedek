"use client";

import Button from "@/components/Button";
import Header from "@/components/Header";
import Input from "@/components/Input";
import { useUser } from "@/hooks/useUser";
import { Database } from "@/types/supabase";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const Add = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { user } = useUser();
  const supabase = useSupabaseClient<Database>();
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      description: "",
      tags: [""],
      expertise: "",
      attachments: [null],
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      setIsLoading(true);

      const attachments = values.attachments;

      const tags = (values.tags as string).replaceAll(" ", "").split(",");

      const { data: postData, error: postError } = await supabase
        .from("posts")
        .insert({
          owner: user?.id,
          project_title: values.title,
          project_description: values.description,
          tags: tags,
          contributor_expertise: values.expertise,
        });

      if (postError) {
        setIsLoading(false);
        return console.log(postError.message);
      }

      router.refresh();
      setIsLoading(false);

      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-neutral-600 rounded-lg h-full w-full overflow-hidden overfow-y-auto drop-shadow-lg">
      <Header />
      <div className="w-2/4 h-full m-auto mt-20">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-4"
        >
          <Input
            id="project_title"
            disabled={isLoading}
            {...register("title", { required: true })}
            placeholder="Project title"
          />
          <Input
            id="project_description"
            disabled={isLoading}
            {...register("description", { required: true })}
            placeholder="Project description"
          />
          <Input
            id="expertise"
            disabled={isLoading}
            {...register("expertise", { required: true })}
            placeholder="Expertise level"
          />
          <Input
            id="tags"
            disabled={isLoading}
            {...register("tags", { required: true })}
            placeholder="Topic tags - seperated by commas"
          />
          <Button disabled={isLoading} type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Add;
