'use client';

import { useForm, Controller } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { enrollStudent } from '@/services/api';
import { PartyPopper } from 'lucide-react';

import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  course: string;
  occupation: string;
  degree: string;
  subject: string;
  newsletter: boolean;
};

export default function EnrollForm({
  admin,
  onClose,
}: {
  admin?: boolean;
  onClose?: () => void;
}) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormValues>({
    defaultValues: {
      course: 'AI Powered Full Stack Marketing',
      occupation: 'student',
      degree: 'highschool',
      newsletter: true,
    },
  });

  const navigate = useRouter();

  const onSubmit = async (data: FormValues) => {
    console.log(data);

    const response = await enrollStudent(data);

    if (response.success) {
      toast(
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-2'>
            <PartyPopper className='text-green-600' />
            <h1 className='text-lg font-semibold text-green-700'>
              Thank You for Enrolling !
            </h1>
          </div>

          <p className='text-sm text-gray-500 leading-relaxed'>
            We've received your enrollment details. Our team will get in touch
            with you soon to guide you through the process.
          </p>
        </div>
      );

      navigate.push('/');

      reset();
    } else {
      return toast.error(response.error);
    }
  };

  return (
    <Card className={`${admin ? 'shadow-none border-none' : ''}`}>
      <CardHeader>
        <CardTitle className='text-xl'>Enroll in Our Course</CardTitle>
        <CardDescription className='text-sm'>
          Get started with our free learning plan. Unlock advanced features by
          upgrading anytime.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-3 md:flex-row'>
              <div className='flex flex-1 flex-col gap-2'>
                <Label htmlFor='name'>Full Name</Label>
                <Input
                  id='name'
                  placeholder='John Steven Doe'
                  {...register('name', { required: true })}
                />
                {errors.name && (
                  <p className='text-xs text-red-500'>{errors.name.message}</p>
                )}
              </div>
            </div>

            <div className='flex flex-col gap-3 md:flex-row'>
              <div className='flex flex-1 flex-col gap-2'>
                <Label htmlFor='email'>Email Address</Label>
                <Input
                  id='email'
                  placeholder='example@acme.com'
                  {...register('email', { required: true })}
                />
                {errors.email && (
                  <p className='text-xs text-red-500'>{errors.email.message}</p>
                )}
              </div>

              <div className='flex flex-1 flex-col gap-2'>
                <Label htmlFor='phone'>Phone Number</Label>
                <Input
                  id='phone'
                  placeholder='+91 9876543210'
                  {...register('phone', { required: true })}
                />
                {errors.phone && (
                  <p className='text-xs text-red-500'>{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='w-full grid gap-2'>
                <Label htmlFor='degree'>Degree</Label>
                <Controller
                  control={control}
                  name='degree'
                  render={({ field }) => (
                    <Select
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger id='degree' className='w-full'>
                        <SelectValue placeholder='Select level' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='highschool'>
                          High School / 12th Grade
                        </SelectItem>
                        <SelectItem value='diploma'>Diploma</SelectItem>
                        <SelectItem value='bachelors'>
                          Bachelor&apos;s Degree
                        </SelectItem>
                        <SelectItem value='masters'>
                          Master&apos;s Degree
                        </SelectItem>
                        <SelectItem value='phd'>PhD / Doctorate</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.degree && (
                  <p className='text-xs text-red-500'>
                    {errors.degree.message}
                  </p>
                )}
              </div>

              <div className='w-full grid gap-2'>
                <div className='flex flex-1 flex-col gap-2'>
                  <Label htmlFor='subject'>Major Subject</Label>
                  <Input
                    id='subject'
                    placeholder='Computer Science'
                    {...register('subject')}
                  />
                </div>
              </div>
            </div>

            <div className='w-full grid gap-2'>
              <Label htmlFor='occupation'>Occupation</Label>
              <Controller
                control={control}
                name='occupation'
                render={({ field }) => (
                  <Select
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger id='occupation' className='w-full'>
                      <SelectValue placeholder='Select' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='student'>Student</SelectItem>
                      <SelectItem value='working-it'>Working IT</SelectItem>
                      <SelectItem value='working-non-it'>
                        Working Non IT
                      </SelectItem>
                      <SelectItem value='entrepreneur'>Entrepreneur</SelectItem>
                      <SelectItem value='freelancer'>Freelancer</SelectItem>
                      <SelectItem value='others'>Others</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.occupation && (
                <p className='text-xs text-red-500'>
                  {errors.occupation.message}
                </p>
              )}
            </div>

            <div className='w-full grid gap-2'>
              <Label htmlFor='course'>Course Category</Label>
              <Controller
                control={control}
                name='course'
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger id='course' className='w-full'>
                      <SelectValue placeholder='Select' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='AI Powered Full Stack Marketing'>
                        AI Powered Full Stack Marketing
                      </SelectItem>

                      <SelectItem value='AI & ML Developer Pro'>
                        AI & ML Developer Pro
                      </SelectItem>
                      <SelectItem value='FutureX: Data Science & ML with AI Tools'>
                        FutureX: Data Science & ML with AI Tools
                      </SelectItem>
                      <SelectItem value='Full Stack Java'>
                        Full Stack Java
                      </SelectItem>
                      <SelectItem value='Generative AI Pro'>
                        Generative AI Pro
                      </SelectItem>
                      <SelectItem value='MERN with AI'>MERN with AI</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.course && (
                <p className='text-xs text-red-500'>{errors.course.message}</p>
              )}
            </div>

            {!admin && (
              <div className='flex flex-col gap-3'>
                <div className='flex items-center gap-2'>
                  <Controller
                    control={control}
                    name='newsletter'
                    render={({ field }) => (
                      <Checkbox
                        id='newsletter'
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    )}
                  />
                  <Label htmlFor='newsletter' className='font-normal'>
                    Subscribe to our updates and course announcements.
                  </Label>
                </div>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter
          className={`flex justify-end gap-4 ${admin ? 'mt-8' : 'mt-2'} `}
        >
          <Button type='submit' size='sm'>
            {admin ? 'Add Student' : 'Join for Free'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
