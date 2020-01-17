@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <center> 
            <p style="padding-top:10px; margin-top:25%" class="alert alert-info">Use the branch's official email. <b>Rsvps</b> for future events will be sent to this email </p>
          </center>
            <div class="panel panel-default z-depth-1" >
                <div class="panel-heading"><b>Create An SRC Division</b></div>

                <div class="panel-body">
                    <form class="form-horizontal" method="POST" action="{{ route('register') }}">
                        {{ csrf_field() }}

                        <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                            <label for="name" class="col-md-4 control-label">Name Of Branch</label>

                            <div class="col-md-6">
                                <input id="reg-name" type="text" class="form-control" name="name" value="{{ old('name') }}" required autofocus>

                                @if ($errors->has('name'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                            <label for="email" class="col-md-4 control-label">Branch E-Mail Address</label>

                            <div class="col-md-6">
                                <input id="reg-email" type="email" class="form-control" name="email" value="{{ old('email') }}" required>

                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                            <label for="password" class="col-md-4 control-label">Password</label>

                            <div class="col-md-6">
                                <input id="reg-pass" type="password" class="form-control" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="password-confirm" class="col-md-4 control-label">Confirm Password</label>

                            <div class="col-md-6">
                                <input id="reg-confirm" type="password" class="form-control" name="password_confirmation" required>
                            </div>
                        </div>

                        <div class="form-group">
                          
                            <div class="col-md-6 col-md-offset-4">
                              <small class="text text-danger" id="slim-error" style="display:none"></small><br/>
                                <button type="submit"  style="display:none" id ="reg-submit-btn" class="btn btn-primary">
                                    Register
                                </button>
                                <button type="submit"  id ="reg-submit-btn-fake" class="btn btn-primary" disabled>
                                    Register
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('custom-js') 
  <script src="{{ asset('js/extra/unique.js') }}" defer></script>

@endsection 
