Deno.serve(async (req) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE, PATCH',
    'Access-Control-Max-Age': '86400',
    'Access-Control-Allow-Credentials': 'false'
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const requestData = await req.json();
    const { email, leadId, companySize, industry, phone, company, stage } = requestData;

    if (!email && !leadId) {
      throw new Error('Email or Lead ID is required');
    }

    // Create Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    // Build update object based on provided fields
    const updateData: any = {
      updated_at: new Date().toISOString()
    };

    if (companySize) updateData.company_size = companySize;
    if (industry) updateData.industry = industry;
    if (phone) updateData.phone = phone;
    if (company) updateData.company = company;
    if (stage) updateData.lead_stage = stage;

    // Update lead by email or leadId
    let updateUrl;
    if (email) {
      updateUrl = `${supabaseUrl}/rest/v1/leads?email=eq.${encodeURIComponent(email)}`;
    } else {
      updateUrl = `${supabaseUrl}/rest/v1/leads?id=eq.${leadId}`;
    }

    const leadResponse = await fetch(updateUrl, {
      method: 'PATCH',
      headers: {
        'apikey': supabaseKey!,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(updateData)
    });

    if (!leadResponse.ok) {
      const errorText = await leadResponse.text();
      throw new Error(`Failed to update lead: ${errorText}`);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Lead updated successfully'
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: {
          code: 'LEAD_UPDATE_ERROR',
          message: error.message
        }
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});