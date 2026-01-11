'use client';

import { useForm, Controller } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { PartyPopper } from 'lucide-react';
import { enrollStudent } from '@/services/api';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  occupation: string;
  newsletter: boolean;
};

// Map the dynamic slug to a user-friendly course title
const COURSE_MAP: Record<string, string> = {
  'ai-powered-marketing': 'AI Powered Full Stack Marketing',
  'generative-ai-pro': 'Generative AI Pro',
  'mern-with-ai-pro': 'MERN with AI',
  'ai-ml-developer-pro': 'AI & ML Developer Pro',
  'full-stack-java-pro': 'Full Stack Java',
  'data-science-ml': 'FutureX: Data Science & ML',
};

export default function LeadForm({
  admin,
  onClose,
}: {
  admin?: boolean;
  onClose?: () => void;
}) {
  const { slug } = useParams<{ slug: string }>();
  const courseTitle = COURSE_MAP[slug] ?? slug;

  const navigate = useRouter();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      occupation: 'student',
      newsletter: true,
    },
  });

  const onSubmit = async (data: FormValues) => {
    const apiData = {
      ...data,
      course: courseTitle,
      type: 'LEADS',
    };

    const response = await enrollStudent(apiData);

    if (response.success) {
      if (typeof window.fbq !== 'undefined') {
        window.fbq('track', 'Lead', {
          value: 1,
          currency: 'USD',
        });
      }

      toast(
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-2'>
            <PartyPopper className='text-green-600' />
            <h1 className='text-lg font-semibold text-slate-200'>
              Thank You for Enrolling !
            </h1>
          </div>

          <p className='text-sm text-gray-400 leading-relaxed'>
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

    onClose?.();
  };

  return (
    <div className={`${admin ? 'shadow-none border-none' : ''} mt-4`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className='flex flex-col gap-6'>
            {/* Full Name */}
            <div className='flex flex-col gap-3 md:flex-row'>
              <div className='flex flex-1 flex-col gap-2'>
                <Label htmlFor='name'>Full Name</Label>
                <Input
                  id='name'
                  placeholder='John Steven Doe'
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && (
                  <p className='text-xs text-red-500'>{errors.name.message}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className='w-full grid gap-2'>
              <Label htmlFor='email'>Email Address</Label>
              <Input
                id='email'
                placeholder='example@acme.com'
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors.email && (
                <p className='text-xs text-red-500'>{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div className='w-full grid gap-2'>
              <Label htmlFor='phone'>Phone Number</Label>
              <Input
                id='phone'
                placeholder='+91 9876543210'
                {...register('phone', { required: 'Phone is required' })}
              />
              {errors.phone && (
                <p className='text-xs text-red-500'>{errors.phone.message}</p>
              )}
            </div>

            {/* Occupation */}
            <div className='w-full grid gap-2'>
              <Label htmlFor='occupation'>Occupation</Label>
              <Controller
                control={control}
                name='occupation'
                rules={{ required: 'Occupation is required' }}
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

            {/* Hidden Info */}
            <div className='text-sm text-muted-foreground mt-2'>
              Selected Course:{' '}
              <span className='font-medium'>{courseTitle}</span>
            </div>
          </div>
        </div>

        <div className='flex justify-end gap-4 mt-6'>
          <Button type='submit' size='sm'>
            Enroll Now
          </Button>
        </div>
      </form>
    </div>
  );
}
